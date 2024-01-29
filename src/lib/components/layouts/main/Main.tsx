import { cn } from "@/lib/utils";
import ScrollUpButton from "../../interaction/forms/buttons/scrollUpButton/ScrollUpButton";
import styles from './Main.module.scss';

export default function Main({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className={cn(styles.main)}
    >
      <div id='top-of-page'></div>
      {children}
      <ScrollUpButton />
    </main>
  );
}
