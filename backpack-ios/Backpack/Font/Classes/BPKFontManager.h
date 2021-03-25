#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#import "BPKFontDefinitionProtocol.h"

NS_ASSUME_NONNULL_BEGIN

@interface BPKFontManager : NSObject

@property(nullable, nonatomic) id<BPKFontDefinitionProtocol> fontDefinition;

+ (instancetype)sharedInstance;

- (UIFont *)regularFontWithSize:(CGFloat)size;
- (UIFont *)semiboldFontWithSize:(CGFloat)size;
- (UIFont *)heavyFontWithSize:(CGFloat)size;

@end

NS_ASSUME_NONNULL_END
