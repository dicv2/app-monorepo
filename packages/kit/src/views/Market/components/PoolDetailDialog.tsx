import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { differenceInDays } from 'date-fns';
import { useIntl } from 'react-intl';

import type { INumberSizeableTextProps } from '@onekeyhq/components';
import {
  NumberSizeableText,
  SizableText,
  XStack,
  YStack,
} from '@onekeyhq/components';
import { useSettingsPersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import type { IMarketDetailPool } from '@onekeyhq/shared/types/market';

import { MarketPoolIcon } from './MarketPoolIcon';
import { MarketTokenAddress } from './MarketTokenAddress';

export function PoolDetailsItem({
  title,
  children,
  currency,
  isNumeric = false,
  formatter = 'marketCap',
  bordered = true,
}: {
  title: string;
  rank?: number;
  currency?: boolean;
  children: ReactElement | string;
  isNumeric?: boolean;
  formatter?: INumberSizeableTextProps['formatter'];
  bordered?: boolean;
}) {
  const [settings] = useSettingsPersistAtom();
  const currencySymbol = settings.currencyInfo.symbol;
  const renderChildren = useMemo(() => {
    if (isNumeric) {
      return (
        <NumberSizeableText
          size="$bodyMdMedium"
          formatter={formatter}
          formatterOptions={currency ? { currency: currencySymbol } : undefined}
        >
          {children as string}
        </NumberSizeableText>
      );
    }
    return typeof children === 'string' ? (
      <SizableText size="$bodyMdMedium">{children}</SizableText>
    ) : (
      children
    );
  }, [children, currency, currencySymbol, formatter, isNumeric]);
  return (
    <YStack
      pb="$3"
      flexBasis={0}
      flexGrow={1}
      gap="$0.5"
      borderColor="$borderSubdued"
      borderBottomWidth={bordered ? '$px' : 0}
    >
      <SizableText color="$textSubdued" size="$bodySm">
        {title}
      </SizableText>
      {renderChildren}
    </YStack>
  );
}

export function PoolDetailDialog({
  item: {
    attributes,
    dexName,
    dexLogoUrl,
    onekeyNetworkId,
    id: pairAddress,
    baseTokenImageUrl,
    quoteTokenImageUrl,
    relationships: {
      baseToken,
      quoteToken,
      dex: {
        data: { id },
      },
    },
  },
}: {
  item: IMarketDetailPool;
}) {
  const intl = useIntl();
  const [baseTokenName, quoteTokenName] = attributes.name.split('/');
  return (
    <YStack gap="$3">
      <XStack gap="$4">
        <PoolDetailsItem
          title={intl.formatMessage({ id: ETranslations.global_pair })}
        >
          {attributes.name}
        </PoolDetailsItem>
        <PoolDetailsItem
          title={intl.formatMessage({ id: ETranslations.global_dex })}
        >
          <XStack gap="$1.5">
            <MarketPoolIcon uri={dexLogoUrl} />
            <SizableText size="$bodyMdMedium">{dexName}</SizableText>
          </XStack>
        </PoolDetailsItem>
      </XStack>
      <XStack gap="$4">
        <PoolDetailsItem
          title={intl.formatMessage({ id: ETranslations.global_price })}
          currency
          isNumeric
          formatter="price"
        >
          {attributes.baseTokenPriceUsd}
        </PoolDetailsItem>
        <PoolDetailsItem
          title={intl.formatMessage({ id: ETranslations.market_24h_txns })}
          isNumeric
        >
          {String(
            attributes.transactions.h24.buys +
              attributes.transactions.h24.sells,
          )}
        </PoolDetailsItem>
      </XStack>
      <XStack gap="$4">
        <PoolDetailsItem
          title={intl.formatMessage({
            id: ETranslations.market_twenty_four_hour_volume,
          })}
          isNumeric
        >
          {attributes.volumeUsd.h24}
        </PoolDetailsItem>
        <PoolDetailsItem
          title={intl.formatMessage({
            id: ETranslations.global_liquidity,
          })}
          isNumeric
          currency
          formatter="marketCap"
        >
          {attributes.reserveInUsd}
        </PoolDetailsItem>
      </XStack>
      <XStack gap="$4">
        <PoolDetailsItem
          title={intl.formatMessage({
            id: ETranslations.global_fdv,
          })}
          isNumeric
        >
          {attributes.fdvUsd}
        </PoolDetailsItem>
        <PoolDetailsItem
          title={intl.formatMessage({
            id: ETranslations.market_days_since_launch,
          })}
        >
          {intl.formatMessage(
            {
              id: ETranslations.market_number_of_days,
            },
            {
              number: differenceInDays(
                new Date(),
                new Date(attributes.poolCreatedAt),
              ),
            },
          )}
        </PoolDetailsItem>
      </XStack>
      <YStack gap="$6" pt="$6" pb="$10">
        <MarketTokenAddress
          networkId={onekeyNetworkId}
          tokenName={baseTokenName.trim()}
          address={baseToken.data.id.split('_').pop() as string}
          uri={baseTokenImageUrl}
        />
        <MarketTokenAddress
          networkId={onekeyNetworkId}
          tokenName={quoteTokenName.trim()}
          address={quoteToken.data.id.split('_').pop() as string}
          uri={quoteTokenImageUrl}
        />
        <MarketTokenAddress
          networkId={onekeyNetworkId}
          tokenName={intl.formatMessage({
            id: ETranslations.global_pair_contract,
          })}
          address={pairAddress.split('_').pop() as string}
        />
      </YStack>
    </YStack>
  );
}
