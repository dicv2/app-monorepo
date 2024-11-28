import { useMedia, usePropsAndStyle } from '@tamagui/core';

import type { IStackStyle } from '@onekeyhq/components';

import { useTradingViewUri } from './useTradingViewUri';
import { WebView } from './WebView';

import type { ViewStyle } from 'react-native';
import type { WebViewProps } from 'react-native-webview';

interface IBaseTradingViewProps {
  mode: 'overview' | 'realtime';
  identifier: string;
  baseToken: string;
  targetToken: string;
}

export type ITradingViewProps = IBaseTradingViewProps & IStackStyle;

export function TradingView(props: ITradingViewProps & WebViewProps) {
  const [restProps, style] = usePropsAndStyle(props);
  const { targetToken, identifier, baseToken, ...otherProps } =
    restProps as IBaseTradingViewProps;
  const { gtMd } = useMedia();
  const uri = useTradingViewUri(
    {
      targetToken,
      identifier,
      baseToken,
    },
    { hideSideToolbar: !gtMd },
  );

  return <WebView uri={uri} style={style as ViewStyle} {...otherProps} />;
}
