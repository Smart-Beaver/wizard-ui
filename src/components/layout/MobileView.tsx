import { dictionary } from '@/libs/en';

function MobileView() {
  return (
    <div className="mt-7 p-6 text-teal-600">
      <div className="mb-6 text-2xl font-bold leading-10">{dictionary.mobileVersion.title}</div>
      <div className="mb-6">
        <span>{dictionary.mobileVersion.desktopResolution.pleaseNote}</span>
        <span className="mx-2 font-bold">{dictionary.mobileVersion.desktopResolution.desktop}</span>
        <span>{dictionary.mobileVersion.desktopResolution.optimalExperience}</span>
      </div>
      <div>{dictionary.mobileVersion.recommended}</div>
    </div>
  );
}

export default MobileView;
