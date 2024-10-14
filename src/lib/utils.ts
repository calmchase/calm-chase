import { type ClassValue, clsx } from "clsx";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
};

export const flyAndScale = (
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 },
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;

  const scaleConversion = (
    valueA: number,
    scaleA: [number, number],
    scaleB: [number, number],
  ) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;

    return valueB;
  };

  const styleToString = (
    style: Record<string, number | string | undefined>,
  ): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + `${key}:${style[key]};`;
    }, "");
  };

  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t,
      });
    },
    easing: cubicOut,
  };
};
export interface Question {
  question: string;
  answer: string;
}
export type APIResponse<T = object> =
  | { success: false; error: string }
  | { success: true; data: T };
export function ordinal(n: number) {
  return (
    n + ["st", "nd", "rd"][(((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1] ||
    "th"
  );
}

export const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export type FormSchema = typeof formSchema;

export interface Address {
  suggestions: Suggestions[];
}

export interface Suggestions {
  placePrediction: {
    place: string;
    types: string[];
    placeId: string;
    text: {
      text: string;
      matches: { endOffset: number }[];
    };
    structuredFormat: {
      mainText: {
        text: string;
        matches: { endOffset: number }[];
      };
      secondaryText: { text: string };
    };
  };
}

export interface GoogleAddress {
  addressComponents: {
    languageCode: string;
    longText: string;
    shortText: string;
    types: string[];
  }[];
  shortFormattedAddress: string;
}

export const questions = [
  {
    id: 1,
    question: "Vehicle Maker",
    options: [
      "ACURA",
      "ALFA ROMEO",
      "ASTON MARTIN",
      "AUDI",
      "BENTLEY",
      "BMW",
      "BUICK",
      "CADILLAC",
      "CHEVROLET",
      "CHRYSLER",
      "DODGE",
      "FIAT",
      "FISKER",
      "FORD",
      "GENESIS",
      "GEO",
      "GMC",
      "HONDA",
      "HUMMER",
      "HYUNDAI",
      "INFINITI",
      "ISUZU",
      "JAGUAR",
      "JEEP",
      "KIA",
      "LANDROVER",
      "LEXUS",
      "LINCOLN",
      "LOTUS",
      "LUCID MOTORS",
      "MAHINDRA",
      "MASERATI",
      "MAZDA",
      "MERCEDES",
      "MERCURY",
      "MINI",
      "MITSUBISHI",
      "NISSAN",
      "OLDSMOBILE",
      "PEUGEOT",
      "PLYMOUTH",
      "POLESTAR",
      "PONTIAC",
      "PORSCHE",
      "RAM",
      "RANGE ROVER",
      "RIVIAN",
      "ROLLS ROYCE",
      "SAAB",
      "SATURN",
      "SKODA",
      "SMART",
      "SPRINTER",
      "SUBARU",
      "SUZUKI",
      "TESLA",
      "TATA",
      "TOYOTA",
      "VOLKSWAGEN",
      "VOLVO",
    ],
  },
  {
    id: 2,
    question: "Vehicle Year",
    options: [],
  },
  {
    id: 3,
    question: "Vehicle Model",
    options: [],
  },
  {
    id: 4,
    question: "Vehicle Trim",
    options: [],
  },
  {
    id: 5,
    question: "Do You Own This Vehicle?",
    options: ["YES", "NO"],
  },
  {
    id: 6,
    question: "Save an Additional 20% by Adding another Vehicle",
    options: ["ADD ANOTHER VEHICLE", "NO, THANKS"],
  },
  {
    id: 7,
    question: "Are you currently insured?",
    options: ["YES", "NO"],
  },
  {
    id: 8,
    question: "Current Insurance Company",
    options: [
      "AAA INSURANCE CO",
      "ALLSTATE INSURANCE",
      "FARM BUREAU/FARM FAMILY/RURAL",
      "FARMERS INSURANCE",
      "GEICO",
      "HART ACCIDENT AND INDEMNITY",
      "NATIONWIDE GENERAL INSURANCE",
      "PROGRESSIVE",
      "SAFECO",
      "STATE FARM COUNTY",
      "USAA",
      "OTHER",
    ],
  },
  {
    id: 9,
    question: "GENDER",
    options: ["FEMALE", "MALE"],
  },
  {
    id: 10,
    question: "DATE OF BIRTH",
    options: [],
  },
  {
    id: 11,
    question: "Are you currently married?",
    options: ["YES", "NO"],
  },
  {
    id: 12,
    question: "Incidents In The Past 3 Years",
    options: ["Had an accident", "Received a ticket", "Received a DUI"],
  },
  {
    id: 13,
    question: "Name",
    options: [],
  },
  {
    id: 14,
    question: "Add another driver? (Save Additional 20%)",
    options: ["ADD ANOTHER DRIVER", "NO, THANKS"],
  },
  {
    id: 15,
    question: "Address",
    options: [],
  },
  {
    id: 16,
    question: "Home Ownership",
    options: ["RENT", "OWN", "OTHER"],
  },
  {
    id: 17,
    question: "Contact information",
    options: [],
  },
];
