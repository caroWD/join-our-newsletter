import { AnimatePresence, motion } from 'motion/react'

type Props = {
  handleClick: () => void
}

export const Message = ({ handleClick }: Props) => {
  setTimeout(() => {
    handleClick()
  }, 3000)

  return (
    <AnimatePresence initial={false}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="bg-cerulean-blue 2xs:max-h-[8.25rem] 2xs:gap-2 *:leading-tigh 2xs:rounded-[0.625rem] flex h-screen max-h-[6.75rem] flex-col justify-center gap-0.5 rounded-md text-center text-white">
          <h3 className="text-3xl font-semibold">Thank you!</h3>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
