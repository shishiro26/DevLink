import { icons } from ".";

export const skillIcons = (skill: string) => {
  const skillName = icons.find((s) => s.name === skill.toLowerCase());
  return skillName;
};

export const socialIcons = (link: string) => {
  const lowercaseLink = link?.toLowerCase();

  if (lowercaseLink.includes("discord")) {
    return icons.find((s) => s.name === "discord");
  } else if (lowercaseLink.includes("twitter")) {
    return icons.find((s) => s.name === "twitter");
  } else if (lowercaseLink.includes("linkedin")) {
    return icons.find((s) => s.name === "linkedin");
  } else if (lowercaseLink.includes("gitlab")) {
    return icons.find((s) => s.name === "gitlab");
  } else if (lowercaseLink.includes("dribbble")) {
    return icons.find((s) => s.name === "dribbble");
  } else if (lowercaseLink.includes("github")) {
    return icons.find((s) => s.name === "github");
  } else if (lowercaseLink.includes("instagram")) {
    return icons.find((s) => s.name === "instagram");
  }

  return null;
};
