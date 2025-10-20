/**
 * Standards mapping utilities for CBSE and NGSS
 */

export type StandardProvider = 'CBSE' | 'NGSS';

export interface StandardLabel {
  code: string;
  label: string;
  provider: StandardProvider;
}

// CBSE standards mapping
export const CBSE_STANDARDS: Record<string, string> = {
  'CBSE:Science:Class-6': 'Class 6 Science',
  'CBSE:Science:Class-7': 'Class 7 Science',
  'CBSE:Science:Class-8': 'Class 8 Science',
  'CBSE:Science:Class-9': 'Class 9 Science',
  'CBSE:Science:Class-10': 'Class 10 Science',
  'CBSE:Math:Class-6': 'Class 6 Math',
  'CBSE:Math:Class-7': 'Class 7 Math',
  'CBSE:Math:Class-8': 'Class 8 Math',
  'CBSE:Math:Class-9': 'Class 9 Math',
  'CBSE:Math:Class-10': 'Class 10 Math',
};

// NGSS standards mapping
export const NGSS_STANDARDS: Record<string, string> = {
  'NGSS:K-PS2-1': 'Kindergarten: Plan and conduct investigations to provide evidence that vibrations make sound.',
  'NGSS:K-PS2-2': 'Kindergarten: Make observations to construct an evidence-based account that objects can be moved by pushing or pulling.',
  'NGSS:1-PS4-1': 'Grade 1: Plan and conduct investigations to provide evidence that sound is produced by vibrating materials.',
  'NGSS:2-PS1-1': 'Grade 2: Plan and conduct an investigation to describe and classify different kinds of materials by their observable properties.',
  'NGSS:MS-ETS1-1': 'Grade 6-8: Define the criteria and constraints of a design challenge.',
  'NGSS:MS-ETS1-2': 'Grade 6-8: Evaluate competing design solutions using a systematic process.',
  'NGSS:HS-ETS1-1': 'Grade 9-12: Analyze a major global challenge to specify qualitative and quantitative criteria.',
};

/**
 * Get the friendly label for a standard code
 */
export function getStandardLabel(code: string): string {
  if (code.startsWith('CBSE:')) {
    return CBSE_STANDARDS[code] || code;
  }
  if (code.startsWith('NGSS:')) {
    return NGSS_STANDARDS[code] || code;
  }
  return code;
}

/**
 * Get the provider (CBSE or NGSS) from a standard code
 */
export function getStandardProvider(code: string): StandardProvider | null {
  if (code.startsWith('CBSE:')) return 'CBSE';
  if (code.startsWith('NGSS:')) return 'NGSS';
  return null;
}

/**
 * Get all standards for a provider
 */
export function getStandardsByProvider(provider: StandardProvider): StandardLabel[] {
  const standards = provider === 'CBSE' ? CBSE_STANDARDS : NGSS_STANDARDS;
  return Object.entries(standards).map(([code, label]) => ({
    code,
    label,
    provider,
  }));
}

/**
 * Filter standards by provider
 */
export function filterStandardsByProvider(
  standards: string[],
  provider: StandardProvider
): string[] {
  return standards.filter((s) => getStandardProvider(s) === provider);
}
