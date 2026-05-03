import React from "react";
import { Logo } from "@/components/logo";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function PrivacyPolicyScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.7}>
          <Feather name="arrow-left" size={20} color="#00f5ff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PRIVACY POLICY</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 40 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* App info badge */}
        <View style={styles.infoBadge}>
          <Text style={styles.infoBadgeText}>📦 com.skydash.toolsuitex</Text>
          <Text style={styles.infoBadgeText}>🗓 Effective: May 3, 2025</Text>
          <Text style={styles.infoBadgeText}>👤 Developer: ToolSuiteX</Text>
        </View>

        <Text style={styles.intro}>
          Thank you for playing{" "}
          <Text style={styles.accent}>Sky Dash</Text>. This Privacy Policy explains
          how we collect, use, and protect your information when you use our app.
          By playing Sky Dash, you agree to this policy.
        </Text>

        <Section title="1. Information We Collect">
          <BulletPoint>
            <Text style={styles.bold}>Game progress data</Text> — Your score,
            coins, unlocked skins, and settings are stored{" "}
            <Text style={styles.bold}>locally on your device only</Text>. This
            data never leaves your device.
          </BulletPoint>
          <BulletPoint>
            <Text style={styles.bold}>Advertising data</Text> — We use Google
            AdMob to show ads. AdMob may collect device identifiers and usage
            data to show relevant ads.
          </BulletPoint>
          <BulletPoint>
            <Text style={styles.bold}>Crash reports</Text> — Anonymous crash
            reports may be collected to help us fix bugs.
          </BulletPoint>
        </Section>

        <Section title="2. How We Use Your Information">
          <BulletPoint>To save and restore your game progress on your device</BulletPoint>
          <BulletPoint>To display ads through Google AdMob (which keeps the game free)</BulletPoint>
          <BulletPoint>To diagnose crashes and improve stability</BulletPoint>
        </Section>

        <View style={styles.highlight}>
          <Text style={styles.highlightText}>
            🔒 We do <Text style={styles.bold}>NOT</Text> sell, rent, or share
            your personal information with any third party for marketing purposes.
          </Text>
        </View>

        <Section title="3. Google AdMob Advertising">
          <Text style={styles.body}>
            Sky Dash uses <Text style={styles.accent}>Google AdMob</Text> to
            display banner and interstitial advertisements. AdMob may use device
            identifiers (Android Advertising ID) and tracking technologies to
            serve personalised ads.
          </Text>
          <Text style={[styles.body, { marginTop: 10 }]}>
            To opt out of personalised ads on Android:
          </Text>
          <BulletPoint>
            Go to <Text style={styles.bold}>Settings → Google → Ads → Opt out
            of Ads Personalisation</Text>
          </BulletPoint>
          <BulletPoint>
            Or visit:{" "}
            <Text style={styles.accent}>adssettings.google.com</Text>
          </BulletPoint>
        </Section>

        <Section title="4. Children's Privacy">
          <Text style={styles.body}>
            Sky Dash is rated <Text style={styles.bold}>Everyone</Text> and is
            suitable for all ages. We do not knowingly collect personal
            information from children under 13. If you believe your child has
            provided personal information, please contact us to delete it.
          </Text>
        </Section>

        <Section title="5. Data Storage & Security">
          <Text style={styles.body}>
            All game data is stored <Text style={styles.bold}>locally on your
            device</Text> using AsyncStorage and is not transmitted to our
            servers. We take reasonable precautions to protect your data.
          </Text>
        </Section>

        <Section title="6. Permissions We Request">
          <BulletPoint>
            <Text style={styles.bold}>INTERNET</Text> — Required to display ads
          </BulletPoint>
          <BulletPoint>
            <Text style={styles.bold}>ACCESS_NETWORK_STATE</Text> — Used by
            AdMob to detect connectivity
          </BulletPoint>
          <Text style={[styles.body, { marginTop: 8 }]}>
            We do <Text style={styles.bold}>NOT</Text> request access to your
            camera, microphone, contacts, location, or storage.
          </Text>
        </Section>

        <Section title="7. Third-Party Services">
          <BulletPoint>
            <Text style={styles.accent}>Google AdMob</Text> —{" "}
            policies.google.com/privacy
          </BulletPoint>
          <BulletPoint>
            <Text style={styles.accent}>Expo</Text> — expo.dev/privacy
          </BulletPoint>
        </Section>

        <Section title="8. Changes to This Policy">
          <Text style={styles.body}>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected in the app with an updated effective date.
            Continued use of the app after changes means you accept the updated
            policy.
          </Text>
        </Section>

        <Section title="9. Contact Us">
          <View style={styles.contactBox}>
            <Text style={styles.contactRow}>
              📧 <Text style={styles.accent}>mohsinabid77834@gmail.com</Text>
            </Text>
            <Text style={styles.contactRow}>
              📦 <Text style={styles.bold}>com.skydash.toolsuitex</Text>
            </Text>
            <Text style={styles.contactRow}>
              👤 <Text style={styles.bold}>ToolSuiteX</Text>
            </Text>
          </View>
        </Section>

        <Text style={styles.footer}>
          © 2025 ToolSuiteX · Sky Dash · All rights reserved
        </Text>
      </ScrollView>
    </View>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#030318" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#00f5ff22",
    backgroundColor: "#07071e",
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#00f5ff14",
    borderWidth: 1,
    borderColor: "#00f5ff33",
  },
  headerTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    color: "#00f5ff",
    letterSpacing: 4,
  },

  scroll: { flex: 1 },
  content: { padding: 22 },

  infoBadge: {
    backgroundColor: "#0d0d2a",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00f5ff22",
    padding: 14,
    gap: 4,
    marginBottom: 20,
  },
  infoBadgeText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: "#7080b0",
    letterSpacing: 0.5,
  },

  intro: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#b0bcd8",
    lineHeight: 22,
    marginBottom: 8,
  },

  section: { marginTop: 26 },
  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "#00f5ff",
    letterSpacing: 1,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#00f5ff22",
  },

  body: {
    fontFamily: "Inter_400Regular",
    fontSize: 13.5,
    color: "#b0bcd8",
    lineHeight: 21,
  },
  bold: { fontFamily: "Inter_700Bold", color: "#d0d8f0" },
  accent: { fontFamily: "Inter_600SemiBold", color: "#00f5ff" },

  bullet: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
    paddingRight: 4,
  },
  bulletDot: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#00f5ff",
    lineHeight: 21,
  },
  bulletText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 13.5,
    color: "#b0bcd8",
    lineHeight: 21,
  },

  highlight: {
    marginTop: 18,
    backgroundColor: "#00f5ff0d",
    borderLeftWidth: 3,
    borderLeftColor: "#00f5ff",
    borderRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 14,
  },
  highlightText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13.5,
    color: "#b0bcd8",
    lineHeight: 21,
  },

  contactBox: {
    backgroundColor: "#0d0d2a",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00f5ff22",
    padding: 16,
    gap: 8,
  },
  contactRow: {
    fontFamily: "Inter_400Regular",
    fontSize: 13.5,
    color: "#b0bcd8",
  },

  footer: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: "#3a4060",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 36,
  },
});
