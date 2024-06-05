'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { HorizontalSeperator } from '@/(components)/(line)/seperator/main';
import { archiveGqlMap } from '@/(model)/archive';
import { conceptGqlMap } from '@/(model)/elements';
import { horizonGqlMap } from '@/(model)/horizon';
import { horizonGql } from '@/(model)/horizon/main';
import { spaceGqlMap } from '@/(model)/space';
import { userGqlMap } from '@/(model)/user';
import { glassFx, roundedFx } from '@/(style)/data';

function Section({ gqlMap }: { gqlMap: string }) {
  return (
    <GlassWindowFrame
      className='aspect-[9/12] w-[20rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='h-full w-full p-[2rem]'>
        <div
          className='flex h-full w-full flex-col font-bold text-white overflow-auto'
          style={{ whiteSpace: 'pre-line' }}
        >
          {gqlMap}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}

function SectionDivider() {
  return <div className='h-[5rem] w-[2px] bg-slate-500 bg-opacity-30' />;
}

function SectionRow({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-[20rem] w-full flex-row flex-wrap items-center gap-[1rem]'>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <div className='h-full w-full'>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>User GQL</p>
        <SectionRow>
          <Section gqlMap={userGqlMap.user.gql} />
          <Section gqlMap={userGqlMap.reservation.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Archive GQL</p>
        <SectionRow>
          <Section gqlMap={archiveGqlMap.gallery.gql} />
          <Section gqlMap={archiveGqlMap.gallery.collection.gql} />
          <Section gqlMap={archiveGqlMap.gallery.collection.resource.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Space GQL</p>
        <SectionRow>

          <Section gqlMap={spaceGqlMap.chapter.gql} />
          <SectionDivider />
          <Section gqlMap={spaceGqlMap.chapter.chat.gql} />
          <Section gqlMap={spaceGqlMap.chapter.chat.conversation.gql} />
          <Section gqlMap={spaceGqlMap.chapter.chat.conversation.message.gql} />
          <SectionDivider />
          <Section gqlMap={spaceGqlMap.chapter.scene.gql} />
          <Section gqlMap={spaceGqlMap.chapter.scene.idea.gql} />
          <SectionDivider />
          <Section gqlMap={spaceGqlMap.chapter.verse.gql} />
          <Section gqlMap={spaceGqlMap.chapter.verse.comment.gql} />
          <SectionDivider />
          <Section gqlMap={spaceGqlMap.chapter.retro.gql} />
          <Section gqlMap={spaceGqlMap.chapter.retro.contribution.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Horizon GQL</p>
        <SectionRow>
          <Section gqlMap={horizonGqlMap.horizon.gql} />
          <SectionDivider />
          <Section gqlMap={horizonGqlMap.horizon.forum.gql} />
          <Section gqlMap={horizonGqlMap.horizon.forum.post.gql} />
          <Section gqlMap={horizonGqlMap.horizon.forum.post.comment.gql} />
          <SectionDivider />
          <Section gqlMap={horizonGqlMap.horizon.cluster.gql} />
          <Section gqlMap={horizonGqlMap.horizon.cluster.update.gql} />
          <SectionDivider />
          <Section gqlMap={horizonGqlMap.horizon.arc.gql} />
          <Section gqlMap={horizonGqlMap.horizon.arc.point.gql} />
          <SectionDivider />
          <Section gqlMap={horizonGqlMap.horizon.point.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Concept GQL</p>
        <SectionRow>
          <Section gqlMap={conceptGqlMap.file.gql} />
          <SectionDivider />
          <Section gqlMap={conceptGqlMap.link.gql} />
          <SectionDivider />
          <Section gqlMap={conceptGqlMap.log.gql} />
          <SectionDivider />
          <Section gqlMap={conceptGqlMap.note.gql} />
          <SectionDivider />
          <Section gqlMap={conceptGqlMap.score.gql} />
        </SectionRow>
      </div>
    </div>
  );
}
