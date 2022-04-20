import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';
import { CommandCategory } from '../../constants';

const NUT_URL = 'https://media.discordapp.net/attachments/838062729398976522/879523609926832198/meme.png';

export const nut: CommandDefinition = {
    name: 'nut',
    description: 'nut',
    category: CommandCategory.FUNNIES,
    executor: async (msg) => {
        const nutEmbed = makeEmbed({ image: { url: NUT_URL } });
        await msg.channel.send({ embeds: [nutEmbed] });
    },
};
