import { FC } from 'react';
import * as React from 'react';

import {
  MempoolTokenTransferTransaction,
  TokenTransferTransaction,
} from '@stacks/stacks-blockchain-api-types';

import { Circle } from '../../../../common/components/Circle';
import { KeyValueHorizontal } from '../../../../common/components/KeyValueHorizontal';
import { StxPriceButton } from '../../../../common/components/StxPriceButton';
import { microToStacks, microToStacksFormatted } from '../../../../common/utils/utils';
import { Box } from '../../../../ui/Box';
import { HStack } from '../../../../ui/HStack';
import { Icon } from '../../../../ui/Icon';
import { Stack } from '../../../../ui/Stack';
import { Text } from '../../../../ui/Text';
import { StxIcon } from '../../../../ui/icons';

export const Amount: FC<{ tx: TokenTransferTransaction | MempoolTokenTransferTransaction }> = ({
  tx,
}) => {
  const stxValue = microToStacksFormatted(tx.token_transfer.amount);
  return (
    <KeyValueHorizontal
      label={'Amount'}
      value={
        <>
          <HStack alignItems="flex-start" gap={2}>
            <Box width="24px" position="relative">
              <Circle position="absolute" left={0} size="24px" bg={'accent'}>
                <Icon as={StxIcon} size="14px" color="white" />
              </Circle>
            </Box>
            <Text fontSize="16px" color={'textTitle'} fontWeight="500">
              {stxValue}{' '}
              <Text as="span" display="inline" opacity="0.5">
                STX
              </Text>
            </Text>
          </HStack>
          <StxPriceButton tx={tx} value={Number(tx.token_transfer.amount)} />
        </>
      }
      copyValue={stxValue.toString()}
    />
  );
};
