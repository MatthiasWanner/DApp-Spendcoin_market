import Spinner from '@components/SpinnerComponent';
import { COLORS } from '@utils/constants/colors.constants';
import PaymentContainer from './PaymentContainer';

interface IProps {
  message?: string;
}

function AwaitingRequest({
  message = 'Awaiting Blockchain'
}: IProps): JSX.Element {
  return (
    <PaymentContainer>
      <Spinner text={message} spinnerColor={COLORS.INDIGO_DYE} />
    </PaymentContainer>
  );
}

export default AwaitingRequest;
