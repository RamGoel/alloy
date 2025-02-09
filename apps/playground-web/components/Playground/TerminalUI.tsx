import { Dice1, Dice3, Dice5, Info } from 'lucide-react';
import Shell from '../Shell/Shell';
import { formatTime } from '@/shared/utils/commonUtils';
import { useState } from 'react';
import Tooltip from '../Overlays/Tooltip';
export function TerminalUI({ initialCommandsLeft = 1000 }) {
  const [commandsLeft, setCommandsLeft] = useState(initialCommandsLeft);
  const [cleanupTimeLeft, setCleanupTimeLeft] = useState(15 * 60);
  const handleCommandExecuted = (commands: number, cleanup: number) => {
    setCommandsLeft(commands);
    if (cleanup !== -1) {
      setCleanupTimeLeft(cleanup);
    }
  };

  return (
    <>
      <div
        className="h-full bg-editor rounded-xl flex flex-col"
        data-testid="terminal-container"
      >
        <div className="px-4 py-4 flex items-center rounded-lg">
          <div className="flex space-x-2" data-testid="dice-icons">
            <Dice5 className="w-4 h-4 bg-red-500" />
            <Dice1 className="w-4 h-4 bg-yellow-500" />
            <Dice3 className="w-4 h-4 bg-green-500" />
          </div>
        </div>
        <div
          className="h-full flex-grow rounded-lg overflow-hidden shadow-md"
          data-testid="shell-container"
        >
          <Shell onCommandExecuted={handleCommandExecuted} />
        </div>
      </div>
      <TerminalCounter
        commandsLeft={commandsLeft}
        cleanupTimeLeft={cleanupTimeLeft}
      />
    </>
  );
}

function TerminalCounter({
  commandsLeft,
  cleanupTimeLeft,
}: {
  commandsLeft: number;
  cleanupTimeLeft: number;
}) {
  return (
    <div className="flex flex-col" data-testid="terminal-counter">
      <div className="flex items-center justify-between my-4">
        <InstanceMessage extraClassname="hidden lg:flex" />
        <div className="w-full flex justify-between md:justify-end items-center space-x-2">
          <div
            className="flex items-center justify-between gap-1 border border-border text-text_secondary text-sm bg-transparent p-3 rounded-lg"
            data-testid="cleanup-timer"
          >
            <Tooltip message="The time remaining until cleanup is initiated." />
            <span>
              <span className="font-semibold">Cleanup in: </span>
              {formatTime(cleanupTimeLeft)} mins
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-1 border border-border text-text_secondary text-sm bg-transparent p-3 rounded-lg"
            data-testid="commands-left"
          >
            <Tooltip message="The number of commands you can execute before cleanup." />{' '}
            <span>
              <span className="font-semibold">Commands left: </span>
              {commandsLeft}
            </span>
          </div>
        </div>
      </div>
      <InstanceMessage extraClassname="lg:hidden" />
    </div>
  );
}

const InstanceMessage = ({
  extraClassname = '',
}: {
  extraClassname?: string;
}) => {
  return (
    <div
      className={`flex flex-row w-full items-center gap-2 justify-center md:justify-start ${extraClassname}`}
    >
      <Info className="w-4 h-4 text-text_secondary" />
      <p className="text-sm text-text_secondary">
        DiceDB instance is shared across all users.
      </p>
    </div>
  );
};
