import { useCallback, useEffect, useState } from 'react';

import { useIntl } from 'react-intl';

import {
  Icon,
  IconButton,
  Markdown,
  SizableText,
  Stack,
  XStack,
} from '@onekeyhq/components';
import type { IKeyOfIcons } from '@onekeyhq/components/src/primitives';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import {
  EFirmwareUpdateSteps,
  useFirmwareUpdateStepInfoAtom,
  useSettingsPersistAtom,
} from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import type {
  IBleFirmwareUpdateInfo,
  IBootloaderUpdateInfo,
  ICheckAllFirmwareReleaseResult,
  IFirmwareChangeLog,
  IFirmwareUpdateInfo,
} from '@onekeyhq/shared/types/device';

import { useFirmwareUpdateActions } from '../hooks/useFirmwareUpdateActions';

import { FirmwareUpdatePageFooter } from './FirmwareUpdatePageLayout';
import { FirmwareUpdateWalletProfile } from './FirmwareUpdateWalletProfile';
import { FirmwareVersionProgressBar } from './FirmwareVersionProgressBar';

function ChangeLogMarkdown({
  changelog,
}: {
  changelog: IFirmwareChangeLog | undefined;
}) {
  const [{ locale }] = useSettingsPersistAtom();
  const [language, setLanguage] = useState(locale);

  useEffect(() => {
    void (async () => {
      if (locale === 'system') {
        setLanguage(await backgroundApiProxy.serviceSetting.getCurrentLocale());
      }
    })();
  }, [locale]);

  return (
    <Markdown>
      {changelog?.[language === 'zh-CN' ? 'zh-CN' : 'en-US'] ||
        'No change log found.'}
    </Markdown>
  );
}

function ChangeLogSection({
  title,
  icon,
  isDone,
  updateInfo,
}: {
  title: string;
  icon: IKeyOfIcons;
  isDone?: boolean;
  updateInfo:
    | IFirmwareUpdateInfo
    | IBleFirmwareUpdateInfo
    | IBootloaderUpdateInfo
    | undefined;
}) {
  const intl = useIntl();

  const [collapse, setCollapse] = useState(isDone);
  const onDropDownPressed = useCallback(() => {
    setCollapse(!collapse);
  }, [collapse]);
  return (
    <Stack>
      <XStack gap="$3" py="$2" ai="center" onPress={onDropDownPressed}>
        <Icon name={icon} size="$5" />
        <Stack flex={1}>
          <SizableText size="$bodyLgMedium">{title}</SizableText>
          <SizableText
            size="$bodyMd"
            color={isDone ? '$textSubdued' : '$textInfo'}
          >
            {isDone
              ? intl.formatMessage(
                  { id: ETranslations.update_updated_to_latest_version },
                  {
                    version:
                      updateInfo?.toVersion ||
                      intl.formatMessage({ id: ETranslations.global_unknown }),
                  },
                )
              : intl.formatMessage(
                  { id: ETranslations.global_version_is_available },
                  {
                    version:
                      updateInfo?.toVersion ||
                      intl.formatMessage({ id: ETranslations.global_unknown }),
                  },
                )}
          </SizableText>
        </Stack>
        <IconButton
          icon={collapse ? 'ChevronDownSmallOutline' : 'ChevronTopSmallOutline'}
          variant="tertiary"
          onPress={onDropDownPressed}
        />
      </XStack>
      {collapse ? null : (
        <Stack bg="$bgStrong" p="$5" borderRadius="$3">
          <FirmwareVersionProgressBar
            fromVersion={updateInfo?.fromVersion}
            toVersion={updateInfo?.toVersion}
          />
          <ChangeLogMarkdown changelog={updateInfo?.changelog} />
        </Stack>
      )}
    </Stack>
  );
}

export function FirmwareChangeLogContentView({
  result,
  isDone,
}: {
  result: ICheckAllFirmwareReleaseResult | undefined;
  isDone?: boolean;
}) {
  const intl = useIntl();
  return (
    <Stack mt="$8">
      {result?.updateInfos?.bootloader?.hasUpgrade ? (
        <ChangeLogSection
          title={intl.formatMessage({ id: ETranslations.global_bootloader })}
          icon="StorageOutline"
          updateInfo={result?.updateInfos?.bootloader}
          isDone={isDone}
        />
      ) : null}
      {result?.updateInfos?.ble?.hasUpgrade ? (
        <ChangeLogSection
          title={intl.formatMessage({ id: ETranslations.global_bluetooth })}
          icon="BluetoothOutline"
          updateInfo={result?.updateInfos?.ble}
          isDone={isDone}
        />
      ) : null}
      {result?.updateInfos?.firmware?.hasUpgrade ? (
        <ChangeLogSection
          title={intl.formatMessage({ id: ETranslations.global_firmware })}
          icon="LaunchOutline"
          updateInfo={result?.updateInfos?.firmware}
          isDone={isDone}
        />
      ) : null}
    </Stack>
  );
}

export function FirmwareChangeLogView({
  result,
  onConfirmClick,
}: {
  result: ICheckAllFirmwareReleaseResult | undefined;
  onConfirmClick?: () => void;
}) {
  const intl = useIntl();
  const [, setStepInfo] = useFirmwareUpdateStepInfoAtom();
  const { showCheckList } = useFirmwareUpdateActions();

  return (
    <>
      <FirmwareUpdatePageFooter
        onConfirmText={intl.formatMessage({
          id: ETranslations.update_update_now,
        })}
        onConfirm={() => {
          setStepInfo({
            step: EFirmwareUpdateSteps.showCheckList,
            payload: undefined,
          });
          showCheckList({ result });
          onConfirmClick?.();
        }}
      />
      <Stack>
        <FirmwareUpdateWalletProfile result={result} />

        <FirmwareChangeLogContentView result={result} />
      </Stack>
    </>
  );
}
