import * as S from "./Skeleton.style";
import { SkeletonProps } from "./Skeleton.type";

const Skeleton = ({ width, height, radius = "1.2rem" }: SkeletonProps) => {
  return (
    <S.SkeletonLayout
      $width={width}
      $height={height}
      $radius={radius}
    />
  );
};

export default Skeleton;
