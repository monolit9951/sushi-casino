import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    rarityColors: {
      COMMON: string;
      UNCOMMON: string;
      RARE: string;
      EPIC: string;
      LEGENDARY: string;
    };
    colors: Record<string, string>;
<<<<<<< HEAD
=======
    breakpoints: Record<string, string>;
>>>>>>> 032dffcfde9c0a4e3fb35a058e7886b72c13b66b
  }
}
