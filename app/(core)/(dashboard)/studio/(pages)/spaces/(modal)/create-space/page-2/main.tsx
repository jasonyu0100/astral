import { FormBody } from '@/(components)/(form)/body/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { SpaceTemplate } from '@/(server)/(templates)/space/main';
import { useContext } from 'react';
import { ContextForPageTwo } from '../main';

export function CreateSpaceModalPageTwo() {
  const {
    variant,
    updateVariant,
    templateSpaceChapters: chapterTemplates,
    updateTemplateSpaceChapters: updateChapterTemplates,
  } = useContext(ContextForPageTwo);

  return (
    <FormBody>
      <FormSelect
        title='Chapters'
        value={variant}
        onChange={(e) => {
          updateVariant(e.target.value);
        }}
      >
        <option value={SpaceTemplate.DEFAULT}>{SpaceTemplate.DEFAULT}</option>
        <option value={SpaceTemplate.BAR}>{SpaceTemplate.BAR}</option>
        <option value={SpaceTemplate.MIX}>{SpaceTemplate.MIX}</option>
        <option value={SpaceTemplate.SONG}>{SpaceTemplate.SONG}</option>
      </FormSelect>
      {variant === SpaceTemplate.DEFAULT ? (
        <div className='flex w-full flex-col'>
          {chapterTemplates.map((chapter, index) => (
            <div className='flex w-full flex-col space-y-[0.5rem]' key={index}>
              <div className='flex flex-row items-center'>
                <p className='text-md mr-2 font-bold'>{index + 1}.</p>
                <input
                  placeholder='Enter your title...'
                  className='text-md w-auto rounded px-1 font-bold outline-none'
                  value={chapter.title}
                  onChange={(e) =>
                    updateChapterTemplates(
                      chapterTemplates.map((c, i) =>
                        i === index ? { ...c, title: e.target.value } : c,
                      ),
                    )
                  }
                />
                <button
                  className='ml-auto mr-[15px] h-[30px] w-[30px] rounded-full border-[1px] border-slate-300'
                  onClick={() =>
                    updateChapterTemplates(
                      chapterTemplates.filter((_, i) => i !== index),
                    )
                  }
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-full w-full'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <mask
                      id='mask0_2962_7'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='24'
                      height='24'
                    >
                      <rect width='24' height='24' className='fill-slate-300' />
                    </mask>
                    <g mask='url(#mask0_2962_7)'>
                      <path
                        d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                        className='fill-slate-300'
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <textarea
                value={chapter.description}
                placeholder='Enter your description...'
                className='flex w-full flex-grow resize-none appearance-none bg-transparent  font-light outline-none'
                onChange={(e) =>
                  updateChapterTemplates(
                    chapterTemplates.map((c, i) =>
                      i === index ? { ...c, description: e.target.value } : c,
                    ),
                  )
                }
              />
            </div>
          ))}
          <div className='flex h-[50px] w-full flex-row'>
            <div className='flex flex-grow items-center justify-center'>
              <button
                className='h-[30px] w-[30px] rounded-full border-[1px] border-slate-300'
                onClick={() =>
                  updateChapterTemplates([
                    ...chapterTemplates,
                    {
                      chatTemplates: [],
                      sceneTemplates: [],
                      verseTemplates: [],
                      title: `Chapter ${chapterTemplates.length + 1}`,
                      description: '',
                    },
                  ])
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-full w-full'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <mask
                    id='mask0_3100_7'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='24'
                    height='24'
                  >
                    <rect
                      width='24'
                      height='24'
                      fill='#D9D9D9'
                      className='fill-slate-300'
                    />
                  </mask>
                  <g mask='url(#mask0_3100_7)'>
                    <path
                      d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                      className='fill-slate-300'
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex w-full flex-col space-y-[1rem] bg-slate-50 p-2'>
          {chapterTemplates.map((template, index) => (
            <p className='text-md overflow-hidden font-bold' key={index}>
              {index + 1}. {template.title} -{' '}
              <span className='font-light'>{template.description}</span>
            </p>
          ))}
        </div>
      )}
    </FormBody>
  );
}
