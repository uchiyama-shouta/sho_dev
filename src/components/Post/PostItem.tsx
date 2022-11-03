import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import dayjs from "dayjs";

import type { PostItem as PostItemType } from "apis/blogs";

import { pagesPath } from "lib/$path";
import { template } from "lib/date";

export type Props = Pick<
  PostItemType,
  "id" | "title" | "updatedAt" | "eyecatch" | "description"
>;

const PostItem: FC<Props> = ({
  id,
  title,
  updatedAt,
  eyecatch,
  description,
}) => {
  return (
    <Link href={pagesPath.posts._id(id).$url()}>
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
            <time dateTime={updatedAt}>
              {dayjs(updatedAt).format(template)}
            </time>
          </p>
          <p className="font-semibold sm:text-xl md:text-2xl">{title}</p>
          <p className="mt-3 text-base font-light text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
