import conventional from '@commitlint/config-conventional';
import type { RuleConfigSeverity, UserConfig } from '@commitlint/types';

const config: UserConfig = {
  ...conventional,
  rules: {
    ...conventional.rules,
    'scope-enum': [
      2 as RuleConfigSeverity.Error,
      'always',
      [
        'asus-router-qos-fix',
        'cursed-forge',
        'degeFix',
        'deps-dev',
        'deps',
        'gitignoreProBoW'
      ],
    ],
  },
};

export default config;
