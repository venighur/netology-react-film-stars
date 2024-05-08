import Star from './Star';

type StarsProps = {
  count: 1 | 2 | 3 | 4 | 5;
};

function Stars({ count }: StarsProps) {
  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill(0).map((_, i) => <Star key={i} />)}
    </ul>
  );
}

export default Stars;