export default function Progress(props) {

  console.log(props)
  console.log(props.trgetAmountFromApp)
  return(
    <div>
  <section className="progress">
  <h2>
    Raised <span className="secondary">$0</span> of
    <span className="secondary">${props.targetAmountFromApp}</span>
  </h2>
</section>
    </div>
  )
}
