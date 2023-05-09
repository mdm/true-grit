import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  type: "button" | "submit";
  primary?: boolean;
  style?: string;
  form?: string;
}

const Button = ({ children, type, primary, style, form }: Props) => {
  let color;
  if (primary) {
    color = "bg-green-500 text-white";
  } else {
    color = "bg-slate-200 text-black";
  }

  return form ? (
    <button
      type={type}
      form={form}
      className={clsx("rounded p-2", color, style)}
    >
      {children}
    </button>
  ) : (
    <button type={type} className={clsx("rounded p-2", color, style)}>
      {children}
    </button>
  );
};

export default Button;
