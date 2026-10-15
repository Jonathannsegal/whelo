export const compose = (...enhancers) => component =>
  enhancers.reduceRight((current, enhance) => enhance(current), component);
