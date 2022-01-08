import { PopoverContent, PopoverArrow, PopoverBody } from '@chakra-ui/react'
import { useTypebot } from 'contexts/TypebotContext/TypebotContext'
import { InputStepType, Step, TextInputOptions } from 'models'
import { EmailInputSettingsBody } from './EmailInputSettingsBody'
import { NumberInputSettingsBody } from './NumberInputSettingsBody'
import { TextInputSettingsBody } from './TextInputSettingsBody'

type Props = {
  step: Step
}
export const SettingsPopoverContent = ({ step }: Props) => {
  const handleMouseDown = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <PopoverContent onMouseDown={handleMouseDown}>
      <PopoverArrow />
      <PopoverBody p="6">
        <SettingsPopoverBodyContent step={step} />
      </PopoverBody>
    </PopoverContent>
  )
}

const SettingsPopoverBodyContent = ({ step }: Props) => {
  const { updateStep } = useTypebot()
  const handleOptionsChange = (options: TextInputOptions) =>
    updateStep(step.id, { options } as Partial<Step>)

  switch (step.type) {
    case InputStepType.TEXT: {
      return (
        <TextInputSettingsBody
          options={step.options}
          onOptionsChange={handleOptionsChange}
        />
      )
    }
    case InputStepType.NUMBER: {
      return (
        <NumberInputSettingsBody
          options={step.options}
          onOptionsChange={handleOptionsChange}
        />
      )
    }
    case InputStepType.EMAIL: {
      return (
        <EmailInputSettingsBody
          options={step.options}
          onOptionsChange={handleOptionsChange}
        />
      )
    }
    default: {
      return <></>
    }
  }
}
