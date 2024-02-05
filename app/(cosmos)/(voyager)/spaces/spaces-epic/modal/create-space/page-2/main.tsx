import { FormBody } from '@/(common)/form/body/main';
import { FormSelect } from '@/(common)/form/select/main';
import { SpaceVariant } from '@/tables/space/main';
import { useContext } from 'react';
import { CreateSpaceModalContext } from '../main';

export function PageTwo() {
  const { pageTwo } = useContext(CreateSpaceModalContext);
  const { variant, updateVariant, chapterTemplates, updateChapterTemplates } =
    pageTwo;

  return (
    <FormBody>
      <FormSelect
        title='Variant'
        value={variant}
        onChange={(e) => {
          updateVariant(e.target.value);
        }}
      >
        <option value={SpaceVariant.BAR}>{SpaceVariant.BAR}</option>
        <option value={SpaceVariant.MIX}>{SpaceVariant.MIX}</option>
        <option value={SpaceVariant.SONG}>{SpaceVariant.SONG}</option>
        <option value={SpaceVariant.CUSTOM}>{SpaceVariant.CUSTOM}</option>
      </FormSelect>
      {variant === SpaceVariant.CUSTOM ? (
        <div className='w-full flex flex-col'>
          {chapterTemplates.map((chapter, index) => (
            <div className='w-full flex flex-col space-y-[0.5rem]'>
              <div className='flex flex-row items-center'>
                <p className='font-bold text-md mr-2'>{index + 1}.</p>
                <input
                  placeholder='Enter your title...'
                  className='font-bold text-md outline-none w-auto px-1 rounded'
                  value={chapter.title}
                  onChange={(e) =>
                    updateChapterTemplates(chapterTemplates.map((c, i) =>
                        i === index ? { ...c, title: e.target.value } : c,
                      )
                    )
                  }
                />
                <button
                  className='ml-auto w-[30px] h-[30px] rounded-full'
                  onClick={() =>
                    updateChapterTemplates(chapterTemplates.filter((_, i) => i !== index))
                  }
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-full h-full'
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
                      <rect width='24' height='24' className='fill-slate-500' />
                    </mask>
                    <g mask='url(#mask0_2962_7)'>
                      <path
                        d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                        className='fill-slate-500'
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <textarea
                value={chapter.description}
                placeholder='Enter your description...'
                className='outline-none bg-transparent flex flex-grow font-light w-full  appearance-none resize-none'
                onChange={(e) =>
                  updateChapterTemplates(chapterTemplates.map((c, i) =>
                      i === index ? { ...c, description: e.target.value } : c,
                  ))
                }
              />
            </div>
          ))}
          <div className='w-full flex flex-row h-[50px]'>
            <div className='flex flex-grow items-center justify-center'>
              <button
                className='w-[30px] h-[30px] rounded-full'
                onClick={() =>
                  updateChapterTemplates([
                    ...chapterTemplates,
                    {
                      title: `Chapter ${chapterTemplates.length + 1}`,
                      description: '',
                    },
                  ])
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                    className='w-full h-full'
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
                    <rect width='24' height='24' fill='#D9D9D9' 
                      className="fill-slate-500"
                    />
                  </mask>
                  <g mask='url(#mask0_3100_7)'>
                    <path
                      d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                      className="fill-slate-500"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className='w-[50px] flex-shrink-0' />
          </div>
        </div>
      ) : (
        <div className='bg-slate-50 w-full p-2 flex flex-col space-y-[1rem]'>
          {chapterTemplates.map((template, index) => (
            <p className='font-bold text-md overflow-hidden'>
              {index + 1}. {template.title} -{' '}
              <span className='font-light'>{template.description}</span>
            </p>
          ))}
        </div>
      )}
    </FormBody>
  );
}
