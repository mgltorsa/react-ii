import { useForm } from "react-hook-form";
import { useEffect } from "react";
const FormularioExample = () => {
  const {
    formState: { errors },
    register,
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: " ",
      lastName: "",
      address: "",
    },
  });

  const nameWatch = watch("lastName");
  useEffect(() => {
    console.log("nameWatch", nameWatch);
  }, [nameWatch]);

  const onSubmit = (values) => {
    console.log("Values", values);
  };

  const onSubmitErrorrs = (errors) => {
    console.log("errors", errors);
  };

  const nameValidations = {
    maxLength: {
      value: 10,
      message: "El nombre no puede tener mas de 10 caracteres",
    },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "El nombre solo puede contener letras",
    },
    required: "El nombre es requerido",
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 4 }}
      onSubmit={handleSubmit(onSubmit, onSubmitErrorrs)}
    >
      <input
        {...register("name", nameValidations)}
        placeholder="Escriba su nombre"
      />
      {errors.name && <span>{errors.name.message}</span>}
      <input {...register("lastName")} placeholder="Escriba su apellido" />
      <input {...register("address")} placeholder="Escriba su direccion" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormularioExample;
