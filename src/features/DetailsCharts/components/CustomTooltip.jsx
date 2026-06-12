function CustomTooltip({ payload }) {
  return (
    <p className="label">
      {`${payload[0]?.payload?.name}: ${payload[0]?.payload?.value}`}
    </p>
  );
}

export default CustomTooltip;
