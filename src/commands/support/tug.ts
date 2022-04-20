import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

export const tug: CommandDefinition = {
    name: ['tug', 'stuck'],
    description: 'Provides a solution to an issue where the tug fails to disconnect.',
    category: CommandCategory.SUPPORT,
    executor: async (msg) => {
        const tugEmbed = makeEmbed({
            title: 'FlyByWire Support | My Aircraft is Stuck!',
            description: makeLines([
                'Make sure you do not have the "NW STRG DISC" message on the upper ECAM display. ',
                '',
                'If you do, please press "Shift" + "P" on your keyboard to disconnect the invisible pushback tug.',
                '',
                'Please read our guide [here](https://docs.flybywiresim.com/fbw-a32nx/support/reported-issues/#nose-wheel-steering-locked-nw-strg-disc) for more information. ',
            ]),
        });

        await msg.channel.send({ embeds: [tugEmbed] });

    },
};
