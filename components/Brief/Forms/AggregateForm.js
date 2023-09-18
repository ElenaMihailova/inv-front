import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ProjectAngles } from "../ProjectAngles";
import ContactBrief from "../ContactBrief";
import ModalApproveForm from "@/components/Forms/ModalApproveForm";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import FieldsForForm from "./FieldsForForm";
import { selectFieldsForForm } from "./selectForm";

export const AggregateForm = ({ send, category, projectType }) => {
  const [angles, setAngles] = useState(1);
  const methods = useForm({
    defaultValues: { VisualizationObject: "Продукт" },
  });

  const onSubmit = async (data) => {
    try {
      const sendData = {
        ...data,
        ProjectPlans: angles,
      };
      await send(sendData);
    } catch (error) {}
  };

  const fieldsInputs = selectFieldsForForm(category, projectType);

  useEffect(() => {
    methods.reset();
    setAngles(1);
  }, [category, projectType]);

  return (
    <FormProvider {...methods}>
      <form
        className="pb-15 pr-18
          lg:w-4/6"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {fieldsInputs ? (
          <FieldsForForm
            title="Подробнее о вашем проекте"
            inputs={fieldsInputs}
          >
            <ProjectAngles
              angles={angles}
              setAngles={setAngles}
              category={category}
              projectType={projectType}
            />
          </FieldsForForm>
        ) : null}
        <ContactBrief />
        <div className="lg:flex flex-row-reverse justify-between items-center">
          <ModalApproveForm name="Agreement" />
          <ButtonSubmit text="Отправить бриф" variant="blue" />
        </div>
      </form>
    </FormProvider>
  );
};
