import Image from "next/image";
import type { FC } from "react";

import dayjs from "dayjs";

import type { Post } from "types/post";

type Props = Post;

const PostItem: FC<Props> = ({ id, title, updatedAt, eyecatch }) => {
  return (
    <div
      className="flex w-full flex-col text-white md:flex-row lg:w-10/12"
      key={id}
    >
      <div className="md:mr-6">
        <Image
          src={eyecatch.url}
          width={358}
          height={185}
          alt="アイキャッチ画像"
        />
      </div>
      <div className="flex-1">
        <p className="mt-3 text-sm">
          <time dateTime={updatedAt}>{dayjs(updatedAt).format("YYYY/MM/DD")}</time>
        </p>
        <p className="font-semibold sm:text-xl md:text-2xl">{title}</p>
        <p className="mt-3 text-base font-light text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          cupiditate ipsam illum illo sed error minus mollitia explicabo,
          obcaecati beatae et ea porro, recusandae perspiciatis quibusdam magni
          blanditiis corporis?
        </p>
      </div>
    </div>
  );
};

export default PostItem;
