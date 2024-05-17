// PaymentForm.js
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        // Funcionamiento del reduce más abajo
        // [
        //   { path: "nameError", message: "Nombre es requqerido" },
        //   { path: "lastNameError", message: "Apellido es requerido" },
        // ];

        // -->
        // {
        //   nameError: "Nombre es requerido",
        //   lastNameError: "Apellido es requerido",
        // }
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Card number is required")
    .max(10)
    .matches(/^[0-9]+$/, "Card number must contain only numbers"),
  name: yup.string().required("Name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  cvv: yup.string().required("CVV code is required"),
});

function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: useYupValidationResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" id="cardNumber" {...register("cardNumber")} />
      {errors.cardNumber && <span>{errors.cardNumber.message}</span>}

      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" {...register("lastName")} />
      {errors.lastName && <span>{errors.lastName.message}</span>}

      <label htmlFor="address">Address</label>
      <input type="text" id="address" {...register("address")} />
      {errors.address && <span>{errors.address.message}</span>}

      <label htmlFor="cvv">CVV Code</label>
      <input type="text" id="cvv" {...register("cvv")} />
      {errors.cvv && <span>{errors.cvv.message}</span>}

      {/* Add other form fields here */}

      <button type="submit">Submit</button>
    </form>
  );
}

export default PaymentForm;
