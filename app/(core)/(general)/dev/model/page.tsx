'use client';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { galleryMap } from '@/(model)/(map)/gallery';
import { elementsMap } from '@/(model)/(map)/elements';
import { horizonMap } from '@/(model)/(map)/horizon';
import { spaceMap } from '@/(model)/(map)/space';
import { userMap } from '@/(model)/(map)/user';
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
          <Section gqlMap={userMap.gql} />
          <Section gqlMap={userMap.reservation.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Archive GQL</p>
        <SectionRow>
          <Section gqlMap={galleryMap.gql} />
          <Section gqlMap={galleryMap.collection.gql} />
          <Section gqlMap={galleryMap.collection.resource.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Space GQL</p>
        <SectionRow>

          <Section gqlMap={spaceMap.chapter.gql} />
          <SectionDivider />
          <Section gqlMap={spaceMap.chapter.chat.gql} />
          <Section gqlMap={spaceMap.chapter.chat.member.gql} />
          <Section gqlMap={spaceMap.chapter.chat.conversation.gql} />
          <Section gqlMap={spaceMap.chapter.chat.conversation.message.gql} />
          <SectionDivider />
          <Section gqlMap={spaceMap.chapter.scene.gql} />
          <Section gqlMap={spaceMap.chapter.scene.idea.gql} />
          <SectionDivider />
          <Section gqlMap={spaceMap.chapter.verse.gql} />
          <Section gqlMap={spaceMap.chapter.verse.comment.gql} />
          <SectionDivider />
          <Section gqlMap={spaceMap.chapter.retro.gql} />
          <Section gqlMap={spaceMap.chapter.retro.contribution.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Horizon GQL</p>
        <SectionRow>
          <Section gqlMap={horizonMap.gql} />
          <SectionDivider />
          <Section gqlMap={horizonMap.forum.gql} />
          <Section gqlMap={horizonMap.forum.post.gql} />
          <Section gqlMap={horizonMap.forum.post.comment.gql} />
          <SectionDivider />
          <Section gqlMap={horizonMap.cluster.gql} />
          <Section gqlMap={horizonMap.cluster.update.gql} />
          <SectionDivider />
          <Section gqlMap={horizonMap.arc.gql} />
          <Section gqlMap={horizonMap.arc.point.gql} />
          <SectionDivider />
          <Section gqlMap={horizonMap.update.gql} />
        </SectionRow>
      </div>
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <p className='text-3xl font-bold text-white'>Concept GQL</p>
        <SectionRow>
          <Section gqlMap={elementsMap.file.gql} />
          <SectionDivider />
          <Section gqlMap={elementsMap.link.gql} />
          <SectionDivider />
          <Section gqlMap={elementsMap.log.gql} />
          <SectionDivider />
          <Section gqlMap={elementsMap.note.gql} />
          <SectionDivider />
          <Section gqlMap={elementsMap.score.gql} />
        </SectionRow>
      </div>
    </div>
  );
}
