import { useMemo } from 'react';
import {
  buildFxTag,
  FX_COLORS,
  FX_EFFECTS,
  TextFx,
  type FxColorId,
  type FxEffectId,
} from '@itme.day/rng-react-components';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/kit';
import { useSettingsStore } from '@/stores/settingsStore';

const COLOR_IDS = new Set<string>(FX_COLORS.map((c) => c.id));
const EFFECT_IDS = new Set<string>(Object.keys(FX_EFFECTS));

const isColorId = (v: string): v is FxColorId => COLOR_IDS.has(v);
const isEffectId = (v: string): v is FxEffectId => EFFECT_IDS.has(v);

/** Parse an `effect:colour:name` tag, tolerating a missing effect segment. */
function parseTag(tag: string): {
  name: string;
  color: FxColorId;
  effect: FxEffectId;
} {
  const parts = tag.split(':');
  let effect: FxEffectId = 'none';
  let color: FxColorId = 'rainbow';

  const head = parts[0];
  if (parts.length >= 3 && head !== undefined && isEffectId(head)) {
    effect = head;
    parts.shift();
  }
  const next = parts[0];
  if (parts.length >= 2 && next !== undefined && isColorId(next)) {
    color = next;
    parts.shift();
  }
  return { effect, color, name: parts.join(':') };
}

/**
 * Lets a player style their display name with the TextFx renderer. The
 * resulting `effect:colour:name` tag is persisted in the settings store.
 */
export function NameStylerCard() {
  const nameTag = useSettingsStore((s) => s.nameTag);
  const setNameTag = useSettingsStore((s) => s.setNameTag);

  const { name, color, effect } = useMemo(() => parseTag(nameTag), [nameTag]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Display name</CardTitle>
      </CardHeader>
      <CardContent>
        <TextFx
          value={name}
          color={color}
          effect={effect}
          onChange={(next) => setNameTag(buildFxTag(next, color, effect))}
          onColorChange={(next) => setNameTag(buildFxTag(name, next, effect))}
          onEffectChange={(next) => setNameTag(buildFxTag(name, color, next))}
          fontFamily="var(--gg-font-display)"
        />
      </CardContent>
    </Card>
  );
}
