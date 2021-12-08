import Spinner from '@components/Spinner';
import { COLORS } from '@utils/constants/colors.constants';

function AwaitingRequest() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-isabelline text-black h-72 shadow-white-light">
        <Spinner
          text="Votre facture est en cours de contôle, cela peut prendre plusieurs minutes"
          spinnerColor={COLORS.INDIGO_DYE}
        />
      </div>
    </div>
  );
}

export default AwaitingRequest;
