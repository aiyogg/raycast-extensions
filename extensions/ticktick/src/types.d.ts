// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IntentionalAny = any;

interface Preferences {
  defaultDate: "none" | "today" | "tomorrow" | "dayAfterTomorrow" | "nextWeek";
  autoFillEnabled: boolean;
}
