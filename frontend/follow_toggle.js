class FollowToggle {

  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render(){
    console.log(this.$el);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    }
  }

  handleClick() {
    $("button.follow-toggle").on("click", event => {
      event.preventDefault();
      let requestType = '';
      if (this.followState === "unfollowed"){
        requestType = "POST";
      } else {
        requestType = "DELETE";
      }
      console.log(this.userId);
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: requestType,
        dataType: "JSON",
        success() {
          console.log("whats up?");
        }
      });
    });
  }

}

module.exports = FollowToggle;
