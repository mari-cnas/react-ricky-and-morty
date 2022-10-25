import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { EpisodeType } from 'types/EpisodeType';

import { ColoredCard, EpisodeName } from './styled';

interface IEpisodeCardProps {
  children?: React.ReactNode;
  episode: EpisodeType;
}

const EpisodeCard: React.FC<IEpisodeCardProps> = ({ episode }) => (
  <ColoredCard
    style={{ width: '18rem' }}
    className="text-dark d-flex flex-row w-100"
  >
    <Card.Body className="px-4 py-4">
      <EpisodeName>
        <p className="aling-self-center">{episode.name}</p>
      </EpisodeName>
      <Card.Text>
        <p className="fw-bold">Episode: {episode.episode}</p>
        <p className="fw-bold">Air Date: {episode.air_date}</p>
        <p className="fw-bold"> Characters:</p>
        <ol>
          {episode.characters.map((characters) => (
            <li>
              <a href={characters} className="text-dark">
                Character
              </a>
            </li>
          ))}
        </ol>
      </Card.Text>
    </Card.Body>
  </ColoredCard>
);

export default memo(EpisodeCard);
