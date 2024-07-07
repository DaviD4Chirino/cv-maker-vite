/**
 * If the assertion returns true, then the children will render
 * @param assertion the check
 * @returns
 */
export default function Assert({
  assertion,
  children,
}: {
  assertion: boolean;
  children: any;
}) {
  return assertion ? <>{children}</> : <></>;
}
