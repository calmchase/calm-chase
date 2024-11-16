import { dev } from "$app/environment";
import { z } from "zod";

export const SESSION_TOKEN = "medsi-doc-session-token";
export const firebaseKey = import.meta.env.FB_WEB_KEY;
export const HOUR_IN_SECONDS = 60 * 55;
export const WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
export const WEEK_IN_MILLISECONDS = 60 * 60 * 24 * 7 * 1000;

export const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

export const options = {
  path: "/",
  httpOnly: true,
  secure: !dev,
  age: WEEK_IN_SECONDS,
};

export const HMSConfig = {
  autoManageVideo: true,
  autoVideoSubscribe: true,
  autoManageWakeLock: true,
  rememberDeviceSelection: true,
  alwaysRequestPermissions: true,
  captureNetworkQualityInPreview: true,
  settings: { isAudioMuted: false, isVideoMuted: false },
};

export const COUNTRY_MAP = new Map<string, number>([
  ["IN", 356],
  ["AE", 784],
  ["SE", 752],
  ["MD", 498],
  ["RU", 643],
  ["Il", 376],
  ["KG", 417],
  ["KZ", 398],
  ["UA", 804],
  ["TM", 795],
  ["TR", 792],
  ["TJ", 762],
  ["RO", 642],
  ["UZ", 860],
  ["US", 840],
]);

export const COUNTRY_ISO_MAP = new Map<number, string>([
  [356, "IN"],
  [784, "AE"],
  [752, "SE"],
  [498, "MD"],
  [643, "RU"],
  [376, "Il"],
  [417, "KG"],
  [398, "KZ"],
  [804, "UA"],
  [795, "TM"],
  [792, "TR"],
  [762, "TJ"],
  [642, "RO"],
  [860, "UZ"],
  [840, "US"],
]);

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type FormSchema = typeof formSchema;
