import { CommandDefinition } from '../../lib/command';
import { makeEmbed, makeLines } from '../../lib/embed';
import { CommandCategory } from '../../constants';

export const ctrl_e: CommandDefinition = {
    name: ['ctrle', 'ctrl+e', 'ctrl-e', 'enginestart'],
    description: 'Displays help regarding CTRL+E engine start',
    category: CommandCategory.A32NX,
    executor: async (msg) => {
        const ctrl_eEmbed = makeEmbed({
            title: 'FlyByWire A32NX | Engine Start',
            description: makeLines([
                'The FlyByWire A32NX is not compatible with the CTRL+E method of starting your engines.',
                ,
                'Please see our [beginners guide](https://docs.flybywiresim.com/pilots-corner/beginner-guide/engine-start-taxi/) for detailed information on how to configure and start the aircraft.',
            ]),
        });

        await msg.channel.send({ embeds: [ctrl_eEmbed] });

    },
};
