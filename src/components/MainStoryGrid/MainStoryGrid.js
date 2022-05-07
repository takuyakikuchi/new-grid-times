import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              { index > 0 && <Border />}
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              { index > 0 && <Border />}
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --spacing: 16px;
  --section-divider: 1px solid var(--color-gray-300); 

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px 0;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 42% 1fr 1fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    gap: var(--spacing);
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--spacing);
    border-right: var(--section-divider);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    padding-left: var(--spacing);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--spacing);
    border-right: var(--section-divider);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Border = styled.div`
  width: 100%;
  border-top: var(--section-divider);
  margin-top: var(--spacing);
  margin-bottom: var(--spacing);
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    ${StoryList} {
      display: flex;
      flex-direction: row;
      gap: var(--spacing);

      > * {
        flex: 1;
      }
    }

    ${Border} {
      display: none;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--spacing);
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
