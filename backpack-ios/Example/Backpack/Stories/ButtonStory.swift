/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright © 2021 Skyscanner Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Foundation

enum ButtonStory: String, StoryGroup {
  case primary = "Primary"
  case secondary = "Secondary"
  case destructive = "Destructive"
  case featured = "Featured"
  case link = "Link"
  case outline = "Outline"

  var buttonStyle: BPKButtonStyle {
    switch self {
    case .primary:
      return .primary
    case .secondary:
      return .secondary
    case .destructive:
      return .destructive
    case .featured:
      return .featured
    case .link:
      return .link
    case .outline:
      return .outline
    }
  }

  var title: String {
    self.rawValue
  }

  var presentableStory: Presentable {
    let storyboard = loadStoryboard(name: "Buttons")
    let viewController = storyboard("ButtonsViewController").makeViewController
    return CustomPresentable(generateViewController: enrich(viewController, setButtonStyle()))
  }

  func setButtonStyle() -> (UIViewController) -> Void {
    return { storyboardVC in
      guard let buttonsVC = storyboardVC as? BPKButtonsViewController else {
        return
      }
      buttonsVC.style = self.buttonStyle
    }
  }
}
