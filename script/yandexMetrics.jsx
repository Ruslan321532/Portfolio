import Script from 'next/script';

// eslint-disable-next-line no-undef
export const YM_METRIC_ID = process.env.NEXT_PUBLIC_YANDEX_METRIC_ID;

export const pageview = url => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_METRIC_ID, 'hit', url);
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_METRIC_ID, 'reachGoal', action, {
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
    });
  }
};

const YandexMetricaScript = () => {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
        (function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
          m[i].l = 1 * new Date();
          k = e.createElement(t),
          a = e.getElementsByTagName(t)[0],
          k.async = 1,
          k.src = r,
          a.parentNode.insertBefore(k, a);
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${YM_METRIC_ID}, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        });
      `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_METRIC_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetricaScript;
