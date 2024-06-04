const componentOption = {
  button: [
    {
      title: "Button Primary",
      image: "/assets/buttonV1.png",
      variant: "ButtonV1",
    },
    {
      title: "Button Secondary",
      image: "/assets/buttonV2.png",
      variant: "ButtonV2",
    },
    {
      title: "Button Tertiary",
      image: "/assets/buttonV3.png",
      variant: "ButtonV3",
    },
  ],
  header: [
    {
      title: "Header Primary",
      image: "/assets/headerV1.png",
      variant: "HeaderV1",
    },
    {
      title: "Header Secondary",
      image: "/assets/headerV2.png",
      variant: "HeaderV2",
    },
  ],
} as const;

type ComponentOptionType = typeof componentOption;
type Variant<T extends { variant: string }[]> = T[number]["variant"];  //ye componentOption ke andar variant ko return krta hai

/* @ts-ignore */
type ButtonVariants = Variant<ComponentOptionType["button"]>; //Infers the variant types from the button array
/* @ts-ignore */
type HeaderVariants = Variant<ComponentOptionType["header"]>;

const headerVariant: HeaderVariants = "HeaderV1"; // valid
const buttonVariant: ButtonVariants = "ButtonV2"; // valid
const invalidVariantt: HeaderVariants = "HeaderV3"; // TypeScript will flag an error
