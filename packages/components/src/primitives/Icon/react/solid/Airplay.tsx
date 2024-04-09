import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAirplay = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.161 3H17.84c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.423c0 .38 0 .708-.058 1.001a3 3 0 0 1-2.357 2.357c-.293.059-.62.058-1.001.058H18.5a1 1 0 1 1 0-2c.513 0 .623-.005.695-.02a1 1 0 0 0 .786-.785c.014-.072.019-.182.019-.695V7.2c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C18.75 5 18.377 5 17.8 5H6.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C4 6.25 4 6.623 4 7.2v7.3c0 .513.005.623.02.695a1 1 0 0 0 .785.786c.072.014.182.019.695.019a1 1 0 1 1 0 2h-.084c-.38 0-.708 0-1.001-.058a3 3 0 0 1-2.357-2.357c-.059-.293-.058-.62-.058-1.001V7.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 3 5.635 3 6.16 3Z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M12.78 14.375a1 1 0 0 0-1.56 0l-4 5A1 1 0 0 0 8 21h8a1 1 0 0 0 .78-1.625l-4-5Z"
    />
  </Svg>
);
export default SvgAirplay;