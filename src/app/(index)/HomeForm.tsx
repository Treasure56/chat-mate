import { login } from "@/actions/login";
import { FormButton } from "@/components/FormButton";
import { paths } from "@/utils/paths";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeForm() {
  return (
    <div className="flex flex-col gap-5 bg-light text-dark dark:bg-dark dark:text-light absolute -bottom-1 border p-6 rounded-t-xl shadow-primary-light dark:shadow-primary-dark shadow-2xl right-1/2 translate-x-1/2 w-[400px] ">
      <p className="font-medium text-2xl">Enter your name to proceed</p>
      <form className="w-full flex flex-col gap-2" action={login}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="input"
          required
        />
        <div className="flex gap-2">
          <input type="checkbox" name="checked" required />
          <p>
            Agree in our
            <Link href={paths.termAndConditions}> terms and conditions</Link>
          </p>
        </div>
        <FormButton className="btn-primary">
          Proceed <FaArrowRight />
        </FormButton>
      </form>
    </div>
  );
}
