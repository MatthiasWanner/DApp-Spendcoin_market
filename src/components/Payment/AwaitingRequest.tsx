import Spinner from '@components/Spinner';
import { COLORS } from '@utils/constants/colors.constants';
import PaymentContainer from './PaymentContainer';

function AwaitingRequest() {
  return (
    <PaymentContainer>
      <Spinner
        text="Votre facture est en cours de contôle, cela peut prendre plusieurs minutes"
        spinnerColor={COLORS.INDIGO_DYE}
      />
    </PaymentContainer>
  );
}

export default AwaitingRequest;
