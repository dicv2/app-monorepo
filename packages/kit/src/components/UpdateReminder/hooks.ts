import { useCallback, useEffect, useMemo } from 'react';

import { useAppUpdatePersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import type { IChangeLog } from '@onekeyhq/shared/src/appUpdate';
import {
  EAppUpdateStatus,
  isFirstLaunchAfterUpdated,
  isNeedUpdate,
} from '@onekeyhq/shared/src/appUpdate';
import type { ILocaleSymbol } from '@onekeyhq/shared/src/locale';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import { EAppUpdateRoutes, EModalRoutes } from '@onekeyhq/shared/src/routes';

import backgroundApiProxy from '../../background/instance/backgroundApiProxy';
import useAppNavigation from '../../hooks/useAppNavigation';
import { useLocaleVariant } from '../../hooks/useLocaleVariant';
import { usePromiseResult } from '../../hooks/usePromiseResult';

const getLocalVariantChangeLog = (
  changeLog: IChangeLog,
  localVariant: ILocaleSymbol,
) => changeLog?.[localVariant] || changeLog?.['en-US'];

export const useAppChangeLog = (version?: string) => {
  const localVariant = useLocaleVariant();
  const response = usePromiseResult(
    () =>
      version
        ? backgroundApiProxy.serviceAppUpdate.fetchChangeLog(version)
        : Promise.resolve(null),
    [version],
  );
  return useMemo(
    () =>
      response.result
        ? getLocalVariantChangeLog(response.result, localVariant)
        : '',
    [localVariant, response.result],
  );
};

export const useAppUpdateInfo = (isFullModal = false) => {
  const [appUpdateInfo] = useAppUpdatePersistAtom();
  const navigation = useAppNavigation();

  const onViewReleaseInfo = useCallback(() => {
    setTimeout(() => {
      const pushModal = isFullModal
        ? navigation.pushFullModal
        : navigation.pushModal;
      pushModal(EModalRoutes.AppUpdateModal, {
        screen: EAppUpdateRoutes.WhatsNew,
        params: {
          version: platformEnv.version,
        },
      });
    });
  }, [isFullModal, navigation.pushFullModal, navigation.pushModal]);

  // run only once
  useEffect(() => {
    if (isFirstLaunchAfterUpdated(appUpdateInfo)) {
      onViewReleaseInfo();
    }
    void backgroundApiProxy.serviceAppUpdate.fetchAppUpdateInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdateAction = useCallback(() => {
    switch (appUpdateInfo.status) {
      case EAppUpdateStatus.notify:
      case EAppUpdateStatus.downloading:
        {
          const pushModal = isFullModal
            ? navigation.pushFullModal
            : navigation.pushModal;
          pushModal(EModalRoutes.AppUpdateModal, {
            screen: EAppUpdateRoutes.UpdatePreview,
            params: {
              latestVersion: appUpdateInfo.latestVersion,
              isForceUpdate: appUpdateInfo.isForceUpdate,
            },
          });
        }
        break;
      case EAppUpdateStatus.ready:
        if (platformEnv.isDesktop) {
          window.desktopApi.installUpdate();
        }
        break;
      default:
        break;
    }
  }, [
    appUpdateInfo,
    isFullModal,
    navigation.pushFullModal,
    navigation.pushModal,
  ]);

  return useMemo(
    () =>
      isNeedUpdate(appUpdateInfo.latestVersion)
        ? {
            data: appUpdateInfo,
            onUpdateAction,
          }
        : {
            version: platformEnv.version,
            onViewReleaseInfo,
          },
    [appUpdateInfo, onUpdateAction, onViewReleaseInfo],
  );
};
