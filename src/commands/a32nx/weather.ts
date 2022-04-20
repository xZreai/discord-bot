import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed, makeLines } from '../../lib/embed';

export const weather: CommandDefinition = {
    name: ['weather', 'wx'],
    description: 'Explains the current state of the weather and terrain radars in experimental',
    category: CommandCategory.A32NX,
    executor: async (msg) => {
        const weatherEmbed = makeEmbed({
            title: 'FlyByWire A32NX | Weather + Terrain Radars',
            description: makeLines(['The development and experimental versions of the A32NX do not have operating weather and terrain radars. This is due to performance issues related to the default weather and terrain radars and the ND being rewritten.',
                ,
                'The team are currently waiting on a weather and terrain API to be implemented in order to make a radar that is as realistic as possible. You can read the MSFS forum [here.](https://forums.flightsimulator.com/t/implement-weather-and-terrain-api-s-for-aircraft-developers-to-implement-accurate-radar-predictive-windshear-egpws-and-metar-wind-uplink/442016)'
            ]),
        });

        await msg.channel.send({ embeds: [weatherEmbed] });

    },
};

