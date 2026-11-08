import type { AppEntry } from "../types";
import icon from "./icon.png";
import shot1 from "./screenshots/shot-1.webp";
import shot2 from "./screenshots/shot-2.webp";
import shot3 from "./screenshots/shot-3.webp";
import shot4 from "./screenshots/shot-4.webp";
import shot5 from "./screenshots/shot-5.webp";
import shot6 from "./screenshots/shot-6.webp";
import shot7 from "./screenshots/shot-7.webp";
import shot8 from "./screenshots/shot-8.webp";

// bundle id: com.skymanlabs.encore
export const encore: AppEntry = {
  id: "encore",
  name: "Encore",
  category: "app",
  tagline: "Lift. Log. Beat last time.",
  icon,
  screenshots: [shot1, shot2, shot3, shot4, shot5, shot6, shot7, shot8],
  // UTM'd so installs from the site show up as their own channel in PostHog.
  play: "https://play.google.com/store/apps/details?id=com.skymanlabs.encore&referrer=utm_source%3Dskymanlabs%26utm_medium%3Dwebsite%26utm_campaign%3Dproduct_page",
  appStore: "", // TODO: real App Store URL once published (shows "Coming soon" until set)
  description:
    "Encore is a workout log built around one question: did you beat last time? Every set is pre-filled from your last session, so logging is a swipe. When you finish an exercise, Encore tells you whether you went up, held steady or had a lighter day. There's no account to create, and your workouts stay on your phone.",
  features: [
    {
      title: "Last time, on every set",
      detail: "Sets start from what you did last time, with the number to beat right there.",
    },
    {
      title: "A clear verdict",
      detail: "Beat, Matched, Below or First time. More weight, reps, sets or volume all count.",
    },
    {
      title: "Charts for every lift",
      detail: "Estimated one-rep max over time, plus a calendar of every workout and rest day.",
    },
    {
      title: "Plans or no plans",
      detail: "16 ready-made splits for 3 to 6 days a week, your own plan, or a quick workout.",
    },
  ],
  guide: {
    intro:
      "Setup takes about a minute. Pick your units, choose a plan (or skip it), and you're on the Today screen with your first workout ready. The three tabs below walk through setting up, logging a workout and checking your progress.",
    paths: [
      {
        title: "Get set up",
        tab: "Setup",
        intro: "You only do this once. Everything here can be changed later.",
        steps: [
          {
            screen: "Welcome",
            title: "Tap “Get started”",
            detail: "Then pick Kilograms or Pounds. You can switch later in Settings and nothing gets lost.",
          },
          {
            screen: "Want a plan?",
            title: "Pick a template, build your own, or skip",
            detail:
              "“Pick a template” shows 16 proven splits, filtered by 3, 4, 5 or 6 days a week. “Build my own” starts you with an empty Day 1. “Skip, just log” is fine too: you can log quick workouts and add a plan whenever you like.",
          },
          {
            screen: "Plan editor",
            title: "Shape your week",
            detail:
              "Each day has its exercises and sets. Tap a Rest chip to turn it into a training day, drag a handle to reorder exercises, and use “Repeats every” to switch between a weekly plan and a rotating cycle. Tap Save when it looks right.",
          },
          {
            screen: "Set your baseline",
            title: "Add a few starting numbers (optional)",
            detail:
              "Add the weight and reps you can do now for your main lifts. Your first workout then has something to beat. Skip it and your first workout becomes the baseline.",
          },
        ],
      },
      {
        title: "Log a workout",
        tab: "Logging",
        intro: "Encore fills in last time's numbers. Your job is to match them or beat them.",
        steps: [
          {
            screen: "Today",
            title: "Tap “Begin workout”",
            detail:
              "Today shows the day's exercises next to what you lifted last time. No plan? Tap “Start quick workout” and add exercises as you go.",
          },
          {
            screen: "Workout",
            title: "Log each set",
            detail:
              "Swipe a set to the right, or tap its check button. To change a number, drag it up or down, or tap it for the set sheet with + and − keys. A small “↑ +2.5” or “last 80” next to a value shows how it compares with last time.",
          },
          {
            screen: "Workout",
            title: "Add, swap or remove",
            detail:
              "“Add set” copies your last row. The ⋯ menu on an exercise lets you swap it, remove it or rate your form. “Add exercise” at the bottom opens the exercise library.",
          },
          {
            screen: "Workout",
            title: "Tap Finish, then hold",
            detail:
              "Hold “Hold to finish” for a moment to save the workout. Need a break mid-session? Go back and choose Minimise. The timer keeps running and Today shows Resume.",
          },
          {
            screen: "Summary",
            title: "See how you did",
            detail:
              "Encore compares each lift with last time, one at a time, then shows your stats and any new personal records. Tap “Share your Encore” to make a share card, or Done to go back to Today.",
          },
        ],
      },
      {
        title: "Track your progress",
        tab: "Progress",
        intro: "Two tabs answer two questions: am I getting stronger, and am I showing up?",
        steps: [
          {
            screen: "Progress",
            title: "Check your lifts",
            detail:
              "Every lift you've trained is listed with its best set and latest verdict. Your progress streak counts sessions in a row where at least one lift went up.",
          },
          {
            screen: "Exercise detail",
            title: "Read the chart",
            detail:
              "Tap a lift to see its estimated one-rep max over your last 12 sessions. Tap any point to see that day's sets. A ring marks your personal record.",
          },
          {
            screen: "History",
            title: "Look back, or fix a mistake",
            detail:
              "History lists every workout, rest day and missed day. Tap the calendar icon for a month view. Open a day and tap Edit to fix a set or add one you forgot. Tap Done and every verdict and record updates.",
          },
        ],
      },
    ],
    tips: [
      {
        title: "Focus view",
        detail:
          "Prefer one set at a time? Settings › Workout view › Focus shows a single set with a rest timer after each one.",
      },
      {
        title: "Rest timer",
        detail:
          "Auto sets rest by equipment (barbell 2:30, dumbbell 1:30, everything else 1:15). You can pick a fixed time in Settings › Rest timer.",
      },
      {
        title: "Swap a day",
        detail:
          "Not feeling legs today? Tap Swap day on Today to train another day from your plan instead. It only changes this week.",
      },
      {
        title: "Get in touch",
        detail:
          "Profile › Settings › Help & about › Contact us opens an email with your app version filled in. We read every one.",
      },
    ],
  },
  faq: [
    {
      title: "The basics",
      items: [
        {
          question: "Is Encore free?",
          answer:
            "Yes, Encore is free to download and use, with no sign-up.",
        },
        {
          question: "Do I need an account?",
          answer:
            "No. Open the app and start logging. There's no account to create and nothing to sign in to.",
        },
        {
          question: "Does it work offline?",
          answer:
            "Yes. Logging, plans, history and charts all work without a connection, so a basement gym with no signal is fine. Exercise photos need a connection the first time they load.",
        },
        {
          question: "Is there an iPhone version?",
          answer:
            "Not yet. Encore is on Android first, and the iPhone version is in the works.",
        },
      ],
    },
    {
      title: "Logging workouts",
      items: [
        {
          question: "Why are my sets already filled in?",
          answer:
            "Encore pre-fills each set with what you did last time, so most sets are a single swipe. If you lift more, drag the number up or tap it to edit. The small “↑ +2.5” or “last 80” next to a value tells you how it compares.",
        },
        {
          question: "How do I log a warm-up set?",
          answer:
            "Tap the first set's weight or reps to open the set sheet, then turn on “Warm-up set”. Warm-ups show a W, and they don't count towards verdicts, volume or records.",
        },
        {
          question: "Can I log bodyweight or timed exercises?",
          answer:
            "Yes. Bodyweight exercises track reps, and you can add extra load. Timed exercises like planks track how long you held them.",
        },
        {
          question: "Can I switch between kg and lb?",
          answer:
            "Any time, in Profile › Settings › Units. Every number in the app switches straight away, and your history isn't affected.",
        },
        {
          question: "What happens if I leave in the middle of a workout?",
          answer:
            "On a planned workout, choose Minimise. The timer keeps going and Today shows Resume so you can pick up where you left off. A quick workout is only saved when you finish it, so leaving lets you discard it. Even if your phone kills the app, nothing you logged is lost.",
        },
        {
          question: "Will the rest timer alert me when the app is closed?",
          answer:
            "Only while Encore is still running. There are no notifications yet, so keep the app open during your rest if you rely on the chime. The screen stays awake during a workout.",
        },
        {
          question: "An exercise I do is missing. What can I do?",
          answer:
            "Search for it in the exercise library. If nothing comes up, tap “Request this exercise” and tell us its name and equipment. We add requested exercises for everyone, usually within a few days.",
        },
      ],
    },
    {
      title: "Progress and verdicts",
      items: [
        {
          question: "What do Beat, Matched and Below mean?",
          answer:
            "Once every set of an exercise is logged, Encore compares it with last time. Beat means you made progress: more weight, more reps, an extra set or more total volume. Matched means you held steady. Below means a lighter day. First time means there's nothing to compare with yet.",
        },
        {
          question: "I got “Below”. Did I do something wrong?",
          answer:
            "No. Strength goes up and down with sleep, food and stress, and a lighter session is normal. Encore shows it so the record stays honest, not as a failure. Most of the time the next session bounces back.",
        },
        {
          question: "Does good form count as progress?",
          answer:
            "Yes. Rate your form from the ⋯ menu on an exercise. If the numbers matched last time but your form was good, Encore counts it as a Beat. Good form never hides a lighter day, though.",
        },
        {
          question: "What is e1RM?",
          answer:
            "Estimated one-rep max: roughly the heaviest single rep you could do, worked out from the weight and reps you lifted. It lets you compare a heavy set of 5 with a lighter set of 10 on the same chart.",
        },
        {
          question: "How are personal records counted?",
          answer:
            "A PR is the heaviest weight you've ever used for a working set of that exercise. For timed exercises it's your longest hold. Your very first session sets the starting point, so it can't be a PR.",
        },
        {
          question: "How does the progress streak work?",
          answer:
            "It counts finished sessions in a row where at least one lift went up. Rest days don't break it, because it's about sessions, not calendar days. A session where nothing went up resets it.",
        },
      ],
    },
    {
      title: "Plans and history",
      items: [
        {
          question: "Can I change my plan later?",
          answer:
            "Yes. Tap “My plan” on Today to edit it. To start over, tap the plan name at the top of the editor and choose Switch plan. Your history and progress stay as they are.",
        },
        {
          question: "What's the difference between a weekly plan and a rotating cycle?",
          answer:
            "A 7-day plan follows the days of the week, so Push is always on Monday, for example. Any other length is a rotating cycle that ignores weekdays and just runs day after day, up to 14 days long.",
        },
        {
          question: "I skipped a day. What happens to my plan?",
          answer:
            "Encore doesn't push the missed workout forward. It shows up as Missed in History and your plan carries on as scheduled. If you trained but forgot to log it, open that day and tap “Log actual workout”.",
        },
        {
          question: "Can I edit or delete a past workout?",
          answer:
            "Yes. In History, open the day and tap Edit to change sets, add exercises or remove them. Tap Done and every verdict, record and streak is recalculated. There's also a Delete workout button below the log. Both can be undone for a few seconds afterwards.",
        },
        {
          question: "How do I share a workout?",
          answer:
            "After a workout, tap “Share your Encore” on the summary. Pick a style and layout, then save the card to your gallery, post it to Instagram Stories or send it anywhere with Share.",
        },
      ],
    },
    {
      title: "Your data",
      items: [
        {
          question: "Where are my workouts stored?",
          answer:
            "On your phone, and only there. We never receive your workouts, weights or plans.",
        },
        {
          question: "Will my data move to a new phone?",
          answer:
            "Not yet. Encore doesn't back up to the cloud, and it's excluded from Android's backup and phone-to-phone transfer, so a new phone starts fresh. An optional backup is on our list.",
        },
        {
          question: "What does Encore collect?",
          answer:
            "Anonymous usage data, such as which screens are opened and how many sets get logged, plus crash reports. It never includes your workouts or anything you type. The Privacy Policy has the full list.",
        },
        {
          question: "How do I turn off analytics?",
          answer:
            "Go to Profile › Settings › Help & about and switch off “Share anonymous usage data”. That stops both usage analytics and crash reports.",
        },
        {
          question: "How do I delete everything?",
          answer:
            "Uninstalling Encore, or clearing its storage in your phone's settings, deletes all your data. To have the anonymous analytics tied to your install deleted too, email us.",
        },
      ],
    },
  ],
  privacy: {
    effectiveDate: "8 November 2026",
    posture:
      "Encore has no account. Your workouts, plans and settings stay on your phone. To find bugs and see which features get used, the app sends anonymous usage data and crash reports, and you can switch that off at any time.",
    onDevice:
      "Your workouts, sets, weights, plans, baselines and settings are stored only on your device. They're never sent to us, and Encore doesn't back them up to the cloud or include them in device-to-device transfers.",
    collected: [
      {
        category: "App activity",
        detail:
          "Which screens you open and actions like starting a workout or logging a set, recorded as counts and simple options (for example, how many sets were logged). It never includes weights, reps, notes or other text you type. The exception is the name of an exercise you request, so we can add it to the library.",
      },
      {
        category: "Crash reports and diagnostics",
        detail:
          "When the app crashes or misbehaves: the device model, OS version, app version and technical details of the error.",
      },
      {
        category: "Identifiers",
        detail:
          "A random ID created for your install, so usage and crashes from the same install can be grouped together. It isn't linked to your name or email, and it resets if you reinstall.",
      },
      {
        category: "Approximate location",
        detail:
          "Your country, worked out by our analytics provider from the IP address the data arrives from. Encore never asks for or uses your precise location.",
      },
      {
        category: "Install source",
        detail:
          "On Android, the campaign labels from the Play Store link you installed from (for example, a link a friend shared), so we know which links people actually use.",
      },
    ],
    thirdParties: [
      "PostHog: usage analytics (servers in the United States)",
      "Google Firebase: crash reports (Crashlytics) and app configuration (Remote Config); it may also handle usage analytics in place of PostHog",
      "jsDelivr: delivers exercise photos and library updates",
      "Instagram (Meta): only when you choose to share a card to Stories",
    ],
    permissions: [
      {
        name: "Internet",
        reason: "To load exercise photos and updates, and to send the analytics and crash reports described above.",
      },
      {
        name: "Vibration",
        reason: "For haptic feedback when you log a set or a timer ends. You can turn it off in Settings.",
      },
      {
        name: "Photos / storage",
        reason:
          "Only to save a share card to your gallery when you ask to. Android 10 and later don't need a permission for this. On iPhone, Encore can only add photos and can't see your library.",
      },
    ],
    optOut:
      "You can switch off analytics in Profile › Settings › Help & about › “Share anonymous usage data”. That stops usage analytics and crash reports straight away, and the setting sticks. If you're in the EEA or UK, Encore asks before collecting anything.",
    retention:
      "Analytics data is kept for up to one year, then deleted. To have the data tied to your install deleted sooner, email us and we'll remove it.",
    children:
      "Encore is meant for adults and isn't directed at children under 13. We don't knowingly collect information from children.",
  },
  terms: {
    effectiveDate: "8 November 2026",
    appSpecific: [
      {
        title: "Train safely",
        body: "Encore is a logbook, not a coach or a doctor, and nothing in it is medical advice. Strength training carries a risk of injury. Check with a doctor before starting if you have any health concerns, use proper form, and stop if something hurts. You train at your own risk.",
      },
      {
        title: "Numbers are estimates",
        body: "Verdicts, estimated one-rep max, records and streaks are worked out from what you log. They're there to help you see trends, and they're only as accurate as your entries. Don't treat an estimated max as a weight you should attempt.",
      },
      {
        title: "Early access",
        body: "Encore is new and still changing. While it's in beta, some features may change, move or be removed, and bugs can happen. Your data lives on your device and isn't backed up, so keeping it safe is up to you.",
      },
    ],
  },
  acknowledgements: [
    {
      name: "Free Exercise DB",
      detail: "The exercise library and photos.",
      license: "Unlicense",
      href: "https://github.com/yuhonas/free-exercise-db",
    },
    {
      name: "Geist",
      detail: "The typeface used throughout the app.",
      license: "SIL Open Font License 1.1",
      href: "https://github.com/vercel/geist-font",
    },
    {
      name: "Material Symbols",
      detail: "Icons.",
      license: "Apache 2.0",
      href: "https://github.com/google/material-design-icons",
    },
    {
      name: "Kotlin and Compose Multiplatform",
      detail: "The language and UI toolkit.",
      license: "Apache 2.0",
      href: "https://www.jetbrains.com/compose-multiplatform/",
    },
    {
      name: "AndroidX",
      detail: "Android support libraries.",
      license: "Apache 2.0",
      href: "https://developer.android.com/jetpack/androidx",
    },
    {
      name: "kotlinx.coroutines, kotlinx.serialization and kotlinx-datetime",
      detail: "Concurrency, JSON and dates.",
      license: "Apache 2.0",
      href: "https://github.com/Kotlin",
    },
    {
      name: "SQLDelight",
      detail: "The on-device database.",
      license: "Apache 2.0",
      href: "https://github.com/sqldelight/sqldelight",
    },
    {
      name: "Koin",
      detail: "Dependency injection.",
      license: "Apache 2.0",
      href: "https://github.com/InsertKoinIO/koin",
    },
    {
      name: "Coil",
      detail: "Image loading.",
      license: "Apache 2.0",
      href: "https://github.com/coil-kt/coil",
    },
    {
      name: "Ktor",
      detail: "Networking.",
      license: "Apache 2.0",
      href: "https://github.com/ktorio/ktor",
    },
    {
      name: "Firebase SDKs",
      detail: "Crash reporting and remote configuration.",
      license: "Apache 2.0",
      href: "https://github.com/firebase/firebase-android-sdk",
    },
    {
      name: "PostHog SDKs",
      detail: "Anonymous analytics.",
      license: "MIT",
      href: "https://github.com/PostHog/posthog-android",
    },
  ],
};
