import Line from "../ui/Line";
import Title from "../ui/Title";
import IntroDescription from "../ui/IntroDescription";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function ProjectAbout({
  task,
  done,
  CustomerName,
  CustomerUrl,
}) {
  const { t } = useTranslation("common");
  return (
    <div
      className="lg:flex flex-wrap lg:container lg:mx-auto pb-15
    md:pb-20
    lg:pt-15"
    >
      <div className="flex container pt-12 pb-9 lg:w-1/2">
        <span
          className="text-royal-blue text-4xl tracking-tight mr-2
        lg:text-6xl"
        >
          /
        </span>
        <Title text={t("project.about")} />
      </div>

      {task && (
        <div
          className="lg:w-1/2 container
      md:pb-6"
        >
          <Line variantColor="grey" width="full" />
          <IntroDescription title={t("project.task")} text={task} />
        </div>
      )}

      {done && (
        <div className="lg:w-1/2 lg:order-3 container md:pb-6">
          <Line variantColor="grey" width="full" />
          <IntroDescription title={t("project.done")} text={done} />
        </div>
      )}

      <div className="container lg:w-1/2 pt-6">
        {CustomerName && (
          <>
            <p className="uppercase opacity-40 pb-3.8">
              {t("project.customer")}
            </p>
            <p className="text-3.5xl pb-6">{CustomerName}</p>
          </>
        )}
        {CustomerUrl && (
          <Link href={CustomerUrl} className="underline" target="_blank">
            {CustomerUrl}
          </Link>
        )}
      </div>
    </div>
  );
}
