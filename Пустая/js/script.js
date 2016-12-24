var addScrollListenerForFixedPanel = function(t) {
  var e = $(".scrollable-panel .fixed-panel");
  e.css("max-width", e.parent().width());
  var n = t.position().top + t.height() + parseInt(t.css("padding-top")),
    o = e.position().top + parseInt(e.css("margin-top")),
    i = e.height() + parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom"));
  $(window).on("scroll", function(t) {
    var r = $(window).scrollTop() + o + i;
    e.hasClass("is-fixed") && $(window).scrollTop() < e.position().top ? e.removeClass("is-fixed") : r > n && e.addClass("is-fixed")
  }), $(window).on("resize", function() {
    e.css("max-width", e.parent().width())
  })
};
$(function() {
    var t = function(t) {
      return function(e) {
        e.preventDefault(), $.scrollTo(t.dest, {
          duration: "ease",
          offset: t.offset ? t.offset : -75
        }), CoreAnalytics.push({
          event: t.analyticsEvent,
          label: t.analyticsEventLabel,
          category: "Engagement"
        })
      }
    };
    $(".js-teach-at-ga").length && (CoreAnalytics.push({
      event: "visited-teachatGA-page",
      label: "Visited Teach@GA Page",
      category: "Page Visit"
    }), $(".js-teach-at-ga-nav").on("click", function(t) {
      CoreAnalytics.push({
        event: "clicked-teachatGA-persistent-nav",
        label: "clicked anywhere on Teach@GA nav",
        category: "Engagement"
      })
    }), $(".js-instructor-openings-link").on("click", t({
      dest: "#instructor-openings",
      analyticsEvent: "clicked-teachatGA-persistent-nav-openings-link",
      analyticsEventLabel: "Clicked Teach@GA nav instructor openings link"
    })), $(".js-instructor-events-link").on("click", t({
      dest: "#instructor-events",
      analyticsEvent: "clicked-teachatGA-persistent-nav-events-link",
      analyticsEventLabel: "Clicked Teach@GA nav instructor events link"
    })), $(".js-instructor-newsletter-link").on("click", t({
      dest: "#instructor-newsletter",
      analyticsEvent: "clicked-teachatGA-persistent-nav-openings-link",
      analyticsEventLabel: "Clicked Teach@GA nav instructor newsletter link"
    })), $(".metro-contents").on("click", function(t) {
      CoreAnalytics.push({
        event: "changed-teachatGA-metro-dropdown",
        label: "Changed teach@ga metro dropdown",
        category: "Engagement"
      })
    }), $(".js-general-application-button").on("click", function(t) {
      CoreAnalytics.push({
        event: "clicked-teachatGA-general-apply-button",
        label: "Clicked Teach@GA General Application Apply button",
        category: "Engagement"
      })
    }), $(".js-general-application-link").on("click", function(t) {
      CoreAnalytics.push({
        event: "clicked-teachatGA-general-apply-link",
        label: "Clicked Teach@GA General Application Apply Link",
        category: "Engagement"
      })
    }), $(".js-instructor-events-attend.button").on("click", function(t) {
      CoreAnalytics.push({
        event: "clicked-instructor-event-button-link",
        label: "Clicked Teach@GA Attend Instructor Event Button Link",
        category: "Engagement"
      })
    }), $(".js-instructor-events-title").on("click", function(t) {
      CoreAnalytics.push({
        event: "clicked-instructor-event-link",
        label: "Clicked Teach@GA Attend Instructor Event Link",
        category: "Engagement"
      })
    }), $("#teach-times").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-teach-times-section",
        label: "Viewed Teach@GA Teach Times Secion",
        category: "Site Section"
      })
    }), $("#why-teach").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-why-teach-section",
        label: "Viewed Teach@GA Why Teach Section",
        category: "Site Section"
      })
    }), $("#instructor-openings").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-openings-section",
        label: "Viewed Teach@GA Instructor Openings Section",
        category: "Site Section"
      })
    }), $("#instructor-events").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-events-section",
        label: "Viewed Teach@GA Instructor Events Section",
        category: "Site Section"
      })
    }), $("#our-team").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-our-team-section",
        label: "Viewed Teach@GA Our Team Section",
        category: "Site Section"
      })
    }), $("#get-answers").waypoint(function() {
      CoreAnalytics.push({
        event: "viewed-teachatGA-get-answers-section",
        label: "Viewed Teach@GA Get Answers Section",
        category: "Site Section"
      })
    })), $(".js-position-details").length && addScrollListenerForFixedPanel($(".js-position-details")), $(".js-teach-at-general").length && (CoreAnalytics.push({
      event: "visited-teachatGA-instructor-lead-form",
      label: "Visited Teach at GA Instructor Lead Form",
      category: "Visited Lead Form"
    }), CoreAnalytics.push({
      event: "visited-teachatGA-instructor-lead-form-general",
      label: "Visited Instructor Lead Form General Application",
      category: "Visited Lead Form"
    }), $("#new_instructor_lead").on("submit", function(t) {
      CoreAnalytics.push({
        event: "submitted-teachatGA-instructor-lead",
        label: "Submitted Instructor Lead",
        category: "Engagement"
      }), CoreAnalytics.push({
        event: "submitted-teachatGA-instructor-lead-form-general",
        label: "Submitted Instructor Lead from general application",
        category: "Engagement"
      })
    }))
  }),
  function() {
    var t, e, n, o, i, r, a, s, c;
    e = ["number", "expiration_month", "expiration_year", "cvv"], t = ["first_name", "last_name", "company", "street_address", "extended_address", "locality", "region", "postal_code", "country_code_alpha3"], c = !1, s = function() {
      return c = !0, $("#transaction_options_store_in_vault_on_success").attr("checked", !1), r()
    }, a = function() {
      return c = !1, r()
    }, o = function() {
      var t;
      return $("#submitlink").unbind().click(function(t) {
        return t.preventDefault()
      }), $("#transaction_credit_card_number").val(function(t, e) {
        return e.replace(/\ /g, "")
      }), $("#payment-form-wrapper").hide(), $("#payment-info-sidebar").hide(), $("#payment-wrapper").removeClass("sidebar-right-flipped"), $("#payment-processing-wrapper").removeClass("is-hidden"), $(".flash-message").hide(), window.scrollTo(0, 0), n(), CoreAnalytics.push({
        event: "submited-payment-checkout",
        category: "Checkout",
        label: "Checkout Submited Payment"
      }), t = function() {
        return $("#wallet-form").submit()
      }, setTimeout(t, 2500)
    }, i = function() {
      var t;
      return $(".js-confirm-order").unbind().click(function(t) {
        return t.preventDefault()
      }), $("div#js-order-confirm").hide(), $("#payment-processing-wrapper").removeClass("is-hidden"), $(".flash-message").hide(), window.scrollTo(0, 0), CoreAnalytics.push({
        event: "submitted-free-confirmation",
        category: "Checkout",
        label: "Checkout Submitted Free Confirmation"
      }), t = function() {
        return $("#wallet-form").submit()
      }, setTimeout(t, 2500)
    }, n = function() {
      var n, o, i, r, a, s;
      if (c) {
        for ($("#transaction_options_store_in_vault_on_success").attr("checked", !1), n = 0, i = e.length; i > n; n++) a = e[n], $("#transaction_credit_card_" + a).remove();
        for (s = [], o = 0, r = t.length; r > o; o++) a = t[o], s.push($("#transaction_billing_" + a).remove());
        return s
      }
      return $("#transaction_credit_card_token").val("")
    }, r = function() {
      var t, e, n, o;
      return c ? $("#cc-info").hide() : $("#cc-info").show(), n = {
        instance_id: $("#instance_id").val(),
        invoice_id: $("#invoice_id").val(),
        invoice_item_id: null != (e = $("#invoice_item_id")) ? e.val() : void 0,
        use_saved: c
      }, $(".quant").each(function(t, e) {
        return n[e.id] = $(e).val()
      }), t = "payment" === $("#form_invoice_type").val(), o = t ? "/wallet/update_payment_invoice" : "/wallet/update_pending_invoice", $.getJSON(o, n, function(t) {
        var e, n, o, i;
        $("#invoice_id").val(t.invoice_id), o = t.quantities;
        for (e in o) n = o[e], $("#" + e).val(n);
        return $("#tr_data").val(t.tr_data), null != (i = $("#total")) ? i.html(t.price) : void 0
      })
    }, $(function() {
      var t;
      return $("#transaction_credit_card_number").payment("formatCardNumber"), t = $("#credit_card_saved"), c = t.val(), t.click(s), $("#credit_card_new").click(a), $("#submitlink").text(function() {
        return $(this).attr("data-title")
      }).attr("type", "button").click(function() {
        return setTimeout(o, 1)
      }), $(".quant").change(r)
    })
  }.call(this),
  function() {
    $(function() {
      var t, e, n, o, i, r, a, s, c, l;
      if (0 !== $("#catalog-results").length) return CoreAnalytics.push({
        category: "Site Section",
        event: "visited-calendar-page",
        label: "Visited Calendar Page"
      }), $(".topic-filter-container").on("click", function() {
        return CoreAnalytics.push({
          category: "Filter",
          event: "clicked-filter-topic",
          label: "Filtered by Topic"
        })
      }), $(".format-filter-container").on("click", function() {
        return CoreAnalytics.push({
          category: "Filter",
          event: "clicked-filter-format",
          label: "Filtered by Format"
        })
      }), e = new Core.Collections.Courses(window.EDUCATIONAL_OFFERINGS_JSON), l = new Core.Collections.Topics(window.TOPICS_JSON), r = {}, i = new Core.Models.FilterSet(r), t = new Core.Routers.CalendarRouter({
        filterSet: i
      }), o = new Core.Views.DesktopFilterView({
        el: $("#education-nav"),
        filterSet: i,
        collection: l
      }), o.render(), a = new Core.Views.MobileFormatFilterView({
        el: $(".mobile .format-filter-container"),
        filterSet: i
      }), a.render(), s = new Core.Views.MobileTopicFilterView({
        el: $(".mobile .topic-filter-container"),
        filterSet: i,
        collection: l
      }), s.render(), n = new Core.Views.CoursesView({
        collection: e,
        el: $("#catalog-results"),
        emptyView: $("#catalog-wrapper .no-results"),
        filterSet: i,
        topicsCollection: l
      }), n.render(), c = new Core.Views.TopicLinkView({
        el: $("#topic-link-container"),
        filterSet: i,
        collection: l
      }), c.render()
    })
  }.call(this),
  function() {
    $(function() {
      return setTimeout(function() {
        $(".js-fit-text").fitText(1.2, {
          maxFontSize: "150px"
        })
      }, 0), $(".link-section a").each(function(t, e) {
        var n;
        return n = $(e).parents(".link-section").attr("id"), $(e).click(function(t) {
          return CoreAnalytics.push({
            event: "homepage-clicked-" + n
          }), !0
        })
      }), $("#link-courses").waypoint(function() {
        return CoreAnalytics.push({
          category: "Engagement",
          event: "viewed-courses-section",
          label: "Viewed Courses Section"
        })
      }), $("#link-classes-workshops").waypoint(function() {
        return CoreAnalytics.push({
          category: "Engagement",
          event: "viewed-classes-workshops-section",
          label: "Viewed Classes and Workshops Section"
        })
      })
    })
  }.call(this),
  function() {
    $(function() {
      return $("#curriculum .unit h4").click(function() {
        return $("#curriculum h4.ui-state-active").not(this).removeClass("ui-state-active").next().hide().removeClass("ui-accordion-content-active"), $(this).toggleClass("ui-state-active").next().toggleClass("ui-accordion-content-active").slideToggle(200), !1
      })
    })
  }.call(this),
  function() {
    $(function() {
      var t;
      return $(".faq-accordion").length ? (t = $(".faq-accordion"), t.find("li").addClass("hidden"), t.on("click", ".faq-accordion-question", function() {
        var e;
        return e = $(this), e.parent().toggleClass("hidden").siblings().addClass("hidden"), _gaq.push(["_trackEvent", "pdp", "faq_" + t.data("program-slug"), e.text()])
      })) : void 0
    })
  }.call(this),
  function() {
    $(function() {
      var t, e, n, o, i, r, a, s, c, l, u, p, d, h;
      return t = $(".js-follow"), r = t.data("has-follows"), e = $("#follow-modal"), n = $(".js-unknown-follow"), p = function(e) {
        return t.hasClass("not-followed") ? i(e) : h(e)
      }, c = function(t) {
        return e.reveal(), t.preventDefault()
      }, i = function(n) {
        var o;
        return o = n.opt_in, n.opt_in && delete n.opt_in, $.ajax({
          url: "/api/follows",
          type: "POST",
          data: {
            followable: n,
            opt_in: o
          },
          success: function(n) {
            return e.trigger("reveal:close"), l(t), t.data("follow-id", n.follow.id), a()
          },
          error: function(t) {
            return alert("You must use a valid email. Please try again"), a()
          }
        })
      }, h = function(e) {
        var n;
        return n = t.data("follow-id"), $.ajax({
          url: "/api/follows/" + n,
          type: "DELETE",
          data: {
            followable: e
          },
          success: function(e) {
            return u(t), a()
          },
          error: function(t) {
            return a()
          }
        })
      }, o = function(t) {
        var e;
        return e = {
          email: t.data("email"),
          user_id: t.data("user-id"),
          program_id: t.data("program-id"),
          metro_id: t.data("metro-id")
        }
      }, l = function(t) {
        var e;
        return e = t.find(".js-follow-message"), t.removeClass("not-followed").addClass("followed").show(), e.text(e.data("unfollow-message")), t.find("img.js-is-followed").removeClass("is-hidden"), t.find("img.js-not-followed").addClass("is-hidden")
      }, u = function(t) {
        var e;
        return e = t.find(".js-follow-message"), t.removeClass("followed").addClass("not-followed"), e.text(e.data("follow-message")), t.find("img.js-not-followed").removeClass("is-hidden"), t.find("img.js-is-followed").addClass("is-hidden")
      }, a = function() {
        return t.one("click", function(t) {
          return d(t)
        })
      }, s = function() {
        return u(t), t.on("click", function(t) {
          return c(t)
        }), n.on("submit", function(e) {
          var o;
          return o = n.find("input#email").val(), -1 === o.indexOf("@") ? (alert("Please provide us with a valid email address."), !1) : (t.data("email", o), t.off(), d(e))
        })
      }, d = function(e) {
        var n;
        return e.preventDefault(), n = o(t), p(n)
      }, r ? (t.data("follow-id") && l(t), a()) : (u(t), s())
    })
  }.call(this),
  function() {
    this.InstructorLeadForm = function() {
      function t(t) {
        this.source = t.source, this.el = t.el, this.setupEvents()
      }
      var e;
      return e = ["utm_source", "utm_campaign", "utm_content", "utm_medium"], t.prototype.setupEvents = function() {
        return this.el.on("submit", this.submitUnibox.bind(this))
      }, t.prototype.hasNoEmailAtSymbol = function() {
        return -1 === this.el.find("[name*='[email]']").val().indexOf("@")
      }, t.prototype.insertMarketingParams = function(t, n) {
        return _(n).each(function(n, o) {
          return -1 !== e.indexOf(o) ? t["instructor_lead[" + o + "]"] = n : void 0
        }), t
      }, t.prototype.submitUnibox = function(t) {
        var e;
        return t.preventDefault(), this.hasNoEmailAtSymbol() ? (alert("Please provide us with an email address!"), e = this.insertMarketingParams(e, $.url.parse(window.location).params), _(this.el.find("input, select, textarea").serializeArray()).each(function(t) {
          return e[t.name] = t.value
        }), this.el.find(".submit-application").attr("disabled", "disabled").val("Submitting..."), $.ajax({
          url: "/teach-at-ga",
          type: "POST",
          dataType: "json",
          data: e,
          success: function(t) {
            return function(e) {
              var n;
              return CoreAnalytics.push({
                event: "submitted-teachatGA-learn-more-unibox",
                label: "Submitted email for instructor leads in unibox",
                category: "Engagement"
              }), $("#instructor-info-modal").reveal(), n = new Core.Views.InstructorLeadModal({
                el: $("#instructor-info-modal"),
                leadId: e.id,
                source: t.source
              }), n.render(), $(".js-unibox").hide(), $(".js-apply-panel p").each(function(t, e) {
                return $(e).text($(e).data("thanks"))
              }), $(".js-apply-panel form").css("visibility", "hidden"), $(".js-instructor-lead-thank-you").show()
            }
          }(this),
          error: function(t) {
            return function() {
              return $(".submit-application").removeAttr("disabled").text("Try Again")
            }
          }(this)
        })) : void 0
      }, t
    }()
  }.call(this),
  function() {
    this.LeadsInfoSessionFormView = function() {
      function t(t) {
        this.el = t.el, this.setupEvents()
      }
      return t.prototype.setupEvents = function() {
        return this.el.on("submit", function(t) {
          return function() {
            return t.submitForm()
          }
        }(this)), this.el.find('[name="attendee[metro_id]"]').on("change", function(t) {
          return function() {
            return t.updateProspectMetro()
          }
        }(this))
      }, t.prototype.updateProspectMetro = function() {
        return this.el.find('input[data-prospect-name="metro"]').val(this.el.find('[name="attendee[metro_id]"] :selected').data("slug"))
      }, t.prototype.submitForm = function(t) {
        var e, n, o;
        return -1 === this.el.find("[name='attendee[email]']").val().indexOf("@") ? (alert("Please provide us with an email address!"), !1) : (e = this.el.find(".application-1-form"), o = {}, _(e.serializeArray()).each(function(t) {
          return o[t.name] = t.value
        }), n = {
          utm_source: o.utm_source
        }, o["attendee[data]"] = JSON.stringify(n), this.el.find(".submit-application").attr("disabled", "disabled").val("Submitting..."), this.createAttendee(o))
      }, t.prototype.createAttendee = function(t) {
        return $.ajax({
          url: "/api/v2/attendees",
          type: "POST",
          data: t,
          success: function(t) {
            return function(e) {
              return t.displayConfirmation(), t.pushToGoogleAnalytics()
            }
          }(this),
          error: function(t) {
            return function(e) {
              return t.displayError(e)
            }
          }(this)
        })
      }, t.prototype.displayConfirmation = function() {
        var t, e, n;
        return t = this.el.find(".application-confirmation"), e = this.el.find(".form-content"), n = $(".side-nav-layout"), n.length && t.height(e.height()), e.fadeOut("fast", function(e) {
          return function() {
            return t.fadeIn()
          }
        }(this)), this.el.find("div.info-session-application").trigger("ga.course-lead-submitted")
      }, t.prototype.displayError = function(t) {
        var e, n;
        return e = "Sorry, we weren't able to submit your application.  Try again maybe?", n = JSON.parse(t.responseText), n.errors && n.errors.email.length > 0 && (e = n.errors.email[0]), this.el.find(".submit-application").removeAttr("disabled").val("RSVP"), alert(e)
      }, t.prototype.pushToGoogleAnalytics = function() {
        var t, e, n;
        return n = $("#info-session-application").data("page"), e = $("#info-session-application").data("slug"), t = $("#info-session-application").data("format"), t = "event" === n ? "leadevent_" + t : "lead_" + t, _gaq.push(["_trackEvent", t, e, "infosessionrsvp_" + n])
      }, t
    }()
  }.call(this),
  function() {
    $(function() {
      return $(".persistent-sidebar-trigger").waypoint(function(t, e) {
        var n;
        return "down" === e ? (n = $(".persistent-sidebar").width(), $(".persistent-sidebar").addClass("is-fixed").css("width", n), $(".persistent-sidebar-trigger").addClass("has-height")) : ($(".persistent-sidebar").removeClass("is-fixed").css("width", "auto"), $(".persistent-sidebar-trigger").removeClass("has-height"))
      }), $(".persistent-sidebar-bottom-trigger").waypoint(function(t, e) {
        return "down" === e ? ($(".persistent-sidebar").removeClass("is-fixed"), $(".persistent-sidebar").addClass("is-absolute")) : ($(".persistent-sidebar").removeClass("is-absolute"), $(".persistent-sidebar").addClass("is-fixed"))
      }, {
        offset: $(".persistent-sidebar").height()
      })
    })
  }.call(this),
  function() {
    var t, e, n, o, i = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) r.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      r = {}.hasOwnProperty;
    o = function() {
      function t(t, e) {
        this.subNav = t, this.buttonText = e, this.cacheProperties(), this.events(), this.initialState()
      }
      return t.prototype.cacheProperties = function() {
        return this.subNavOffset = this.subNav.position().top, this.subNavLinks = this.subNav.find(".sub-navigation__link"), this.wayPoints = $(".js-sub-navigation-waypoint"), this.endPoint = $("#js-sub-navigation-end")
      }, t.prototype.events = function() {
        this.subNavLinks.unbind("click", this.scrollTo).bind("click", this.scrollTo), $(window).unbind("resize", this.resize).bind("resize", this.resize.bind(this)), $(window).unbind("scroll", this.stick).bind("scroll", this.stick.bind(this)), $(window).unbind("scroll", this.highlightNav).bind("scroll", this.highlightNav.bind(this))
      }, t.prototype.initialState = function() {
        this.subNavLinks.first().addClass("active"), this.addSubNavToggle(), this.stick(), this.highlightNav()
      }, t.prototype.resize = _.debounce(function() {
        this.subNav.removeAttr("style"), this.cacheProperties(), this.stick()
      }, 100), t.prototype.getWayPointMap = function() {
        var t;
        return t = {}, $.each(this.wayPoints, function(e) {
          return function(n, o) {
            var i;
            i = e.subNav.find('[href="#' + o.id + '"]').position().top + e.subNavOffset, t[o.id] = $(o).position().top - i
          }
        }(this)), t
      }, t.prototype.scrollTo = function(t) {
        var e;
        t.preventDefault(), e = $(this).attr("href"), $("html, body").animate({
          scrollTop: $(e).offset().top
        }, 500)
      }, t.prototype.stick = function() {
        var t, e, n, o;
        o = $(window).scrollTop(), e = this.wayPoints.first().position().top, n = this.endPoint.offset().top - (this.subNav.outerHeight(!0) + this.subNavOffset), o >= e ? this.setSubNavPos("fixed", this.subNavOffset) : this.setSubNavPos("absolute", this.subNavOffset), o > n && (t = n - o + this.subNavOffset, this.setSubNavPos("fixed", t))
      }, t.prototype.setSubNavPos = function(t, e) {
        this.subNav.css({
          position: t,
          top: e
        })
      }, t.prototype.highlightNav = _.throttle(function() {
        var t, e;
        t = this.getWayPointMap(), e = $(window).scrollTop(), $.each(t, function(t) {
          return function(n, o) {
            return e >= o ? (t.subNav.find(".sub-navigation__link").removeClass("active"), t.subNav.find('.sub-navigation__link[href="#' + n + '"]').addClass("active")) : void 0
          }
        }(this))
      }, 200), t.prototype.toggleSubNav = function() {
        this.subNav.toggleClass("closed"), this.subNavToggle.toggleClass("closed").attr({
          "aria-expanded": !this.subNavToggle.hasClass("closed")
        })
      }, t.prototype.addSubNavToggle = function() {
        this.subNavToggle = $("<button>", {
          "class": "sub-navigation__small-screen-toggle closed",
          title: "Show/hide page navigation",
          text: this.buttonText,
          "aria-label": "sub navigation menu",
          "aria-controls": "sub navigation",
          "aria-expanded": !1
        }), this.subNav.before(this.subNavToggle).addClass("closed"), this.subNavToggle.bind("click", this.toggleSubNav.bind(this))
      }, t
    }(), n = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return i(e, t), e.prototype.scrollTo = function(t) {
        var e, n;
        t.preventDefault(), n = $(this).attr("href"), e = $(".visible-nav").height(), $("html, body").animate({
          scrollTop: $(n).offset().top - e
        }, 500)
      }, e.prototype.stick = function() {
        var t, e, n, o, i;
        o = $(".visible-nav").height(), i = $(window).scrollTop(), e = this.wayPoints.first().position().top - o, n = this.endPoint.offset().top - (this.subNav.outerHeight(!0) + o), i >= e ? this.setSubNavPos("fixed", this.subNavOffset + o) : this.setSubNavPos("absolute", this.subNavOffset + o), i > n && (t = n - i + this.subNavOffset + o, this.setSubNavPos("fixed", t))
      }, e
    }(o), t = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return i(e, t), e.prototype.cacheProperties = function() {
        return this.offset = 50, this.subNav = $("#js-course-finder-nav"), this.subNavOffset = this.subNav.offset().top - this.offset, this.endPoint = $("#js-course-finder-nav-end-point")
      }, e.prototype.events = function() {
        $(window).unbind("resize", this.resize).bind("resize", this.resize.bind(this)), $(window).unbind("scroll", this.stick).bind("scroll", this.stick.bind(this))
      }, e.prototype.initialState = function() {
        this.addSubNavToggle(), this.stick()
      }, e.prototype.resize = _.debounce(function() {
        this.subNav.removeAttr("style"), this.cacheProperties(), this.stick()
      }, 100), e.prototype.stick = function() {
        var t, e, n;
        n = $(window).scrollTop(), e = this.endPoint.offset().top - (this.subNav.outerHeight(!0) + this.offset), n >= this.subNavOffset ? this.setSubNavPos("fixed", this.offset) : this.setSubNavPos("absolute", 0), n > e && (t = e + this.offset - n, this.setSubNavPos("fixed", t))
      }, e
    }(o), e = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return i(e, t), e.prototype.cacheProperties = function() {
        return this.subNavOffset = this.subNav.position().top, this.subNavLinks = this.subNav.find(".denver-nav-item-link"), this.wayPoints = $(".js-denver-navigation-waypoint"), this.endPoint = $("#js-denver-navigation-end")
      }, e.prototype.initialState = function() {
        this.subNavLinks.first().addClass("active"), this.stick(), this.highlightNav()
      }, e.prototype.scrollTo = function(t) {
        var e, n;
        t.preventDefault(), n = $(this).attr("href"), e = $(".visible-nav").height(), $("html, body").animate({
          scrollTop: $(n).offset().top - e
        }, 500)
      }, e.prototype.stick = function() {}, e.prototype.highlightNav = _.throttle(function() {
        var t, e, n;
        e = this.getWayPointMap(), n = $(window).scrollTop(), t = $(".visible-nav").outerHeight(), $.each(e, function(e) {
          return function(o, i) {
            return n >= i - t ? (e.subNav.find(".denver-nav-item-link").removeClass("active"), e.subNav.find('.denver-nav-item-link[href="#' + o + '"]').addClass("active")) : void 0
          }
        }(this))
      }, 200), e
    }(o), $("#js-sub-navigation").length && new o($("#js-sub-navigation"), "Learn more about the course"), $("#js-sub-navigation-open-the-door").length && new n($("#js-sub-navigation-open-the-door"), "Read more"), $("#js-course-finder-nav").length && new t($("#js-course-finder-nav"), "Explore Course by Topic"), $("#js-denver-nav").length && new e($("#js-denver-nav"), "Explore Course by Topic")
  }.call(this),
  function() {
    $(function() {
      return $(".visible-nav-trigger").waypoint(function(t, e) {
        return "down" === e ? ($(".visible-nav").addClass("is-fixed"), $(".visible-nav-trigger").addClass("has-height")) : ($(".visible-nav").removeClass("is-fixed"), $(".visible-nav-trigger").removeClass("has-height"))
      })
    })
  }

//выбор обучения
$(function() {
	$('.price1_link').click(function() {
    $('.price1').addClass('active');
		$('.price2').removeClass('active');
  });
	$('.price2_link').click(function() {
    $('.price2').addClass('active');
		$('.price1').removeClass('active');
  });
	$('.metro-dropdown').click(function() {
    $('.metro-dropdown').toggleClass('active');
  });
});
//отправка формы
$('#new_lead').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);

        var data = {
            name: $form.find('input[name="lead[name]"]').val(),
            email: $form.find('input[name="lead[email]"]').val(),
            phone: $form.find('input[name="lead[phone]"]').val(),
					metro: $form.find('select[name="lead[metro_id]"]').val(),
					opt: $form.find('input[name="opt_in"]').val(),
        };

        var script = document.createElement('script');
        script.src = 'https://script.google.com/macros/s/AKfycbz43_X2cx5oL9und213wrimZvij44nY1-g5fezMYYEOatj-A82m/exec?name=' + data.name + '&email=' + data.email + '&phone=' + data.phone + '&metro=' + data.metro + '&opt=' + data.opt;
        script.type = 'text/javascript';
        $("body").append(script);

        setTimeout(function() {
            window.location.href = "s.html";
        }, 500);
    });
