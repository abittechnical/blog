import Link from "next/link";
import Badge from "@/components/shared/badge";
import Mdx from "@/components/content/mdx";
import { formatDate, timeAgo } from "@/lib/utils";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export type PostCardProps = {
  date: Date;
  version: string;
  title: string;
  code: string;
  slug: string;
};

const PostCard = ({ date, version, title, code, slug }: PostCardProps) => {
  return (
    <article className="md:flex">
      <h2
        className="text-neutral-10 dark:text-neutralDark-10 mt-px h-full pl-7 text-xs leading-6
        sm:text-sm md:w-1/4 md:pl-0 md:pr-12 md:text-right"
      >
        <a href="">{formatDate(date)}</a>
      </h2>
      <div className="relative pt-2 pl-7 pb-16 md:w-3/4 md:pt-0 md:pl-12">
        {/*Feed Border */}
        <div className="bg-neutral-7 dark:bg-neutralDark-7 absolute -bottom-2 left-0 -top-3 w-px md:top-2.5" />
        {/*Feed Dot */}
        <div
          className="border-neutral-6 bg-neutral-1 dark:bg-neutralDark-1 dark:border-neutralDark-6 absolute
            -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 md:top-[0.4375rem]"
        />
        <Badge
          label={version}
          className="absolute -top-6 right-0 mb-4 md:static"
        />
        <Link href={slug}>
          <h1 className="font-display text-neutral-12 dark:text-neutralDark-12 mb-4 text-xl font-medium sm:text-3xl">
            {title}
          </h1>
        </Link>
        <div
          className="prose dark:prose-invert prose-sm prose-h3:mb-4 prose-h2:font-display prose-h3:text-base prose-h3:leading-6
          prose-pre:text-base prose-a:font-semibold max-w-none"
        >
          <Mdx code={code} />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
